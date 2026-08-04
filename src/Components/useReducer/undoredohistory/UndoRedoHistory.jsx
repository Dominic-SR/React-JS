import React, { useReducer } from 'react';

// 1. Initial State Definition
const initialState = {
  step: 1, // 1: Personal Info, 2: Preferences, 3: Review & Submit
  formData: {
    fullName: '',
    email: '',
    plan: 'basic',
    notifications: true,
  },
  errors: {},
  status: 'idle', // 'idle' | 'submitting' | 'success' | 'error'
  history: [],    // Stack of past formData states for Undo
  future: [],     // Stack of future formData states for Redo
};

// Helper: Form Validator
function validateStep(step, formData) {
  const errors = {};
  if (step === 1) {
    if (!formData.fullName.trim()) errors.fullName = 'Full Name is required.';
    if (!formData.email.includes('@')) errors.email = 'Valid email is required.';
  }
  return errors;
}

// 2. Reducer Function
function wizardReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_FIELD': {
      const { field, value } = action.payload;
      const newFormData = { ...state.formData, [field]: value };

      return {
        ...state,
        // Push current state into history before modifying
        history: [...state.history, state.formData],
        future: [], // Clear redo history on new change
        formData: newFormData,
        // Clear field error as user types
        errors: { ...state.errors, [field]: null },
      };
    }

    case 'UNDO': {
      if (state.history.length === 0) return state;
      const previous = state.history[state.history.length - 1];
      const newHistory = state.history.slice(0, state.history.length - 1);

      return {
        ...state,
        formData: previous,
        history: newHistory,
        future: [state.formData, ...state.future],
      };
    }

    case 'REDO': {
      if (state.future.length === 0) return state;
      const next = state.future[0];
      const newFuture = state.future.slice(1);

      return {
        ...state,
        formData: next,
        history: [...state.history, state.formData],
        future: newFuture,
      };
    }

    case 'NEXT_STEP': {
      const validationErrors = validateStep(state.step, state.formData);
      if (Object.keys(validationErrors).length > 0) {
        return { ...state, errors: validationErrors };
      }
      return {
        ...state,
        step: Math.min(state.step + 1, 3),
        errors: {},
      };
    }

    case 'PREV_STEP':
      return {
        ...state,
        step: Math.max(state.step - 1, 1),
        errors: {},
      };

    case 'SUBMIT_START':
      return { ...state, status: 'submitting' };

    case 'SUBMIT_SUCCESS':
      return { ...state, status: 'success' };

    case 'SUBMIT_FAILURE':
      return { ...state, status: 'error' };

    case 'RESET':
      return initialState;

    default:
      return state;
  }
}

// 3. React Component
export default function RegistrationWizard() {
  const [state, dispatch] = useReducer(wizardReducer, initialState);
  const { step, formData, errors, status, history, future } = state;

  // Mock Async Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch({ type: 'SUBMIT_START' });

    setTimeout(() => {
      // Simulate successful API call
      dispatch({ type: 'SUBMIT_SUCCESS' });
    }, 1500);
  };

  if (status === 'success') {
    return (
      <div className="container py-5" style={{ maxWidth: '600px' }}>
        <div className="card text-center shadow-sm p-4 border-success">
          <div className="card-body">
            <h3 className="text-success mb-3">🎉 Registration Complete!</h3>
            <p className="text-muted">Welcome aboard, <strong>{formData.fullName}</strong>.</p>
            <button
              className="btn btn-outline-primary mt-3"
              onClick={() => dispatch({ type: 'RESET' })}
            >
              Start Over
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5" style={{ maxWidth: '650px' }}>
      <div className="card shadow">
        {/* Card Header & Progress Bar */}
        <div className="card-header bg-primary text-white py-3">
          <div className="d-flex justify-content-between align-items-center mb-2">
            <h4 className="mb-0">Registration Wizard</h4>
            <span className="badge bg-light text-primary fw-bold">Step {step} of 3</span>
          </div>
          <div className="progress" style={{ height: '6px' }}>
            <div
              className="progress-bar bg-info"
              style={{ width: `${(step / 3) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Action Bar (Undo / Redo Controls) */}
        <div className="bg-light px-4 py-2 border-bottom d-flex justify-content-between align-items-center">
          <small className="text-muted">Draft State History</small>
          <div className="btn-group btn-group-sm">
            <button
              className="btn btn-outline-secondary"
              disabled={history.length === 0}
              onClick={() => dispatch({ type: 'UNDO' })}
            >
              ↩ Undo
            </button>
            <button
              className="btn btn-outline-secondary"
              disabled={future.length === 0}
              onClick={() => dispatch({ type: 'REDO' })}
            >
              ↪ Redo
            </button>
          </div>
        </div>

        {/* Card Body / Step Contents */}
        <div className="card-body p-4">
          {step === 1 && (
            <div>
              <h5 className="mb-3">Step 1: Personal Details</h5>
              <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input
                  type="text"
                  className={`form-control ${errors.fullName ? 'is-invalid' : ''}`}
                  value={formData.fullName}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_FIELD',
                      payload: { field: 'fullName', value: e.target.value },
                    })
                  }
                  placeholder="John Doe"
                />
                {errors.fullName && <div className="invalid-feedback">{errors.fullName}</div>}
              </div>

              <div className="mb-3">
                <label className="form-label">Email Address</label>
                <input
                  type="email"
                  className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                  value={formData.email}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_FIELD',
                      payload: { field: 'email', value: e.target.value },
                    })
                  }
                  placeholder="john@example.com"
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
              </div>
            </div>
          )}

          {step === 2 && (
            <div>
              <h5 className="mb-3">Step 2: Account Preferences</h5>
              <div className="mb-3">
                <label className="form-label">Subscription Plan</label>
                <select
                  className="form-select"
                  value={formData.plan}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_FIELD',
                      payload: { field: 'plan', value: e.target.value },
                    })
                  }
                >
                  <option value="basic">Basic ($9/mo)</option>
                  <option value="pro">Pro ($29/mo)</option>
                  <option value="enterprise">Enterprise ($99/mo)</option>
                </select>
              </div>

              <div className="form-check form-switch mb-3">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="notifications"
                  checked={formData.notifications}
                  onChange={(e) =>
                    dispatch({
                      type: 'UPDATE_FIELD',
                      payload: { field: 'notifications', value: e.target.checked },
                    })
                  }
                />
                <label className="form-check-label" htmlFor="notifications">
                  Receive Product Updates via Email
                </label>
              </div>
            </div>
          )}

          {step === 3 && (
            <div>
              <h5 className="mb-3">Step 3: Review & Confirm</h5>
              <ul className="list-group mb-3">
                <li className="list-group-item d-flex justify-content-between">
                  <span>Full Name:</span>
                  <strong>{formData.fullName}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Email:</span>
                  <strong>{formData.email}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Selected Plan:</span>
                  <strong className="text-uppercase">{formData.plan}</strong>
                </li>
                <li className="list-group-item d-flex justify-content-between">
                  <span>Email Updates:</span>
                  <strong>{formData.notifications ? 'Yes' : 'No'}</strong>
                </li>
              </ul>
            </div>
          )}
        </div>

        {/* Card Footer Navigation Buttons */}
        <div className="card-footer bg-light p-3 d-flex justify-content-between">
          <button
            className="btn btn-secondary"
            disabled={step === 1 || status === 'submitting'}
            onClick={() => dispatch({ type: 'PREV_STEP' })}
          >
            Back
          </button>

          {step < 3 ? (
            <button
              className="btn btn-primary"
              onClick={() => dispatch({ type: 'NEXT_STEP' })}
            >
              Next Step →
            </button>
          ) : (
            <button
              className="btn btn-success"
              disabled={status === 'submitting'}
              onClick={handleSubmit}
            >
              {status === 'submitting' ? (
                <>
                  <span className="spinner-border spinner-border-sm me-2" />
                  Submitting...
                </>
              ) : (
                'Submit Registration'
              )}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}