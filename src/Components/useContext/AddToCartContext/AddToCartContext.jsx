import React, { createContext, useContext, useReducer, useMemo, useState } from "react";
import { ShoppingBag, Plus, Minus, Trash2, X } from "lucide-react";

/* ------------------------------------------------------------------ */
/* 1. Cart Context — state, reducer, and actions live here             */
/* ------------------------------------------------------------------ */

const CartContext = createContext(null);

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD_ITEM": {
      const existing = state.items.find((i) => i.id === action.payload.id);
      if (existing) {
        return {
          items: state.items.map((i) =>
            i.id === action.payload.id ? { ...i, qty: i.qty + 1 } : i
          ),
        };
      }
      return { items: [...state.items, { ...action.payload, qty: 1 }] };
    }
    case "REMOVE_ITEM":
      return { items: state.items.filter((i) => i.id !== action.payload) };
    case "INCREMENT":
      return {
        items: state.items.map((i) =>
          i.id === action.payload ? { ...i, qty: i.qty + 1 } : i
        ),
      };
    case "DECREMENT":
      return {
        items: state.items
          .map((i) =>
            i.id === action.payload ? { ...i, qty: i.qty - 1 } : i
          )
          .filter((i) => i.qty > 0),
      };
    case "CLEAR":
      return { items: [] };
    default:
      return state;
  }
}

function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, { items: [] });

  // Actions exposed to consumers — keeps components decoupled from dispatch shape
  const actions = useMemo(
    () => ({
      addItem: (product) => dispatch({ type: "ADD_ITEM", payload: product }),
      removeItem: (id) => dispatch({ type: "REMOVE_ITEM", payload: id }),
      increment: (id) => dispatch({ type: "INCREMENT", payload: id }),
      decrement: (id) => dispatch({ type: "DECREMENT", payload: id }),
      clear: () => dispatch({ type: "CLEAR" }),
    }),
    []
  );

  const totals = useMemo(() => {
    const count = state.items.reduce((sum, i) => sum + i.qty, 0);
    const price = state.items.reduce((sum, i) => sum + i.qty * i.price, 0);
    return { count, price };
  }, [state.items]);

  const value = useMemo(
    () => ({ items: state.items, ...actions, ...totals }),
    [state.items, actions, totals]
  );

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

// Custom hook — the only way consumers should touch the cart
function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within a CartProvider");
  return ctx;
}

/* ------------------------------------------------------------------ */
/* 2. Demo catalog                                                     */
/* ------------------------------------------------------------------ */

const PRODUCTS = [
  { id: "p1", name: "Fog Linen Tote", price: 42, tag: "Bags", swatch: "#8A9A8B" },
  { id: "p2", name: "Ceramic Pour-Over", price: 58, tag: "Kitchen", swatch: "#B5673A" },
  { id: "p3", name: "Wool Throw", price: 96, tag: "Home", swatch: "#5B6E8C" },
  { id: "p4", name: "Brass Bookend Pair", price: 34, tag: "Home", swatch: "#C9A66B" },
  { id: "p5", name: "Waxed Notebook", price: 18, tag: "Desk", swatch: "#3F3B36" },
  { id: "p6", name: "Enamel Mug", price: 22, tag: "Kitchen", swatch: "#9C4A3C" },
];

/* ------------------------------------------------------------------ */
/* 3. UI components                                                    */
/* ------------------------------------------------------------------ */

function ProductCard({ product }) {
  const { addItem } = useCart();
  const [justAdded, setJustAdded] = useState(false);

  const handleAdd = () => {
    addItem(product);
    setJustAdded(true);
    setTimeout(() => setJustAdded(false), 900);
  };

  return (
    <div className="product-card">
      <div className="swatch" style={{ background: product.swatch }} />
      <div className="product-info">
        <span className="product-tag">{product.tag}</span>
        <h3>{product.name}</h3>
        <div className="product-row">
          <span className="price">${product.price}</span>
          <button
            className={`add-btn ${justAdded ? "added" : ""}`}
            onClick={handleAdd}
          >
            {justAdded ? "Added" : "Add"}
          </button>
        </div>
      </div>
    </div>
  );
}

function CartDrawer({ open, onClose }) {
  const { items, increment, decrement, removeItem, price, clear } = useCart();

  return (
    <div className={`drawer-backdrop ${open ? "open" : ""}`} onClick={onClose}>
      <aside
        className={`drawer ${open ? "open" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="drawer-header">
          <h2>Your Bag</h2>
          <button className="icon-btn" onClick={onClose} aria-label="Close cart">
            <X size={18} />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="empty-state">
            <p>Nothing in your bag yet.</p>
            <span>Add something from the catalog to see it here.</span>
          </div>
        ) : (
          <>
            <ul className="cart-list">
              {items.map((item) => (
                <li key={item.id} className="cart-item">
                  <div
                    className="mini-swatch"
                    style={{ background: item.swatch }}
                  />
                  <div className="cart-item-info">
                    <span className="cart-item-name">{item.name}</span>
                    <span className="cart-item-price">${item.price}</span>
                  </div>
                  <div className="qty-controls">
                    <button onClick={() => decrement(item.id)} aria-label="Decrease">
                      <Minus size={14} />
                    </button>
                    <span>{item.qty}</span>
                    <button onClick={() => increment(item.id)} aria-label="Increase">
                      <Plus size={14} />
                    </button>
                  </div>
                  <button
                    className="remove-btn"
                    onClick={() => removeItem(item.id)}
                    aria-label="Remove item"
                  >
                    <Trash2 size={15} />
                  </button>
                </li>
              ))}
            </ul>

            <div className="drawer-footer">
              <div className="total-row">
                <span>Total</span>
                <span>${price.toFixed(2)}</span>
              </div>
              <button className="clear-btn" onClick={clear}>
                Clear bag
              </button>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}

function CartButton({ onClick }) {
  const { count } = useCart();
  return (
    <button className="cart-trigger" onClick={onClick}>
      <ShoppingBag size={18} />
      <span>Bag</span>
      {count > 0 && <span className="count-badge">{count}</span>}
    </button>
  );
}

/* ------------------------------------------------------------------ */
/* 4. App shell                                                         */
/* ------------------------------------------------------------------ */

function StoreApp() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <div className="store-root">
      <header className="store-header">
        <div>
          <h1>Fieldstead & Co.</h1>
          <p>Small-batch goods for a quieter home.</p>
        </div>
        <CartButton onClick={() => setDrawerOpen(true)} />
      </header>

      <main className="product-grid">
        {PRODUCTS.map((p) => (
          <ProductCard key={p.id} product={p} />
        ))}
      </main>

      <CartDrawer open={drawerOpen} onClose={() => setDrawerOpen(false)} />

      <style>{`
        .store-root {
          min-height: 100vh;
          background: #EFEAE2;
          font-family: 'Georgia', 'Iowan Old Style', serif;
          color: #2B2622;
          padding: 32px 24px 80px;
        }
        .store-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          max-width: 960px;
          margin: 0 auto 40px;
          border-bottom: 1px solid #D8CFC2;
          padding-bottom: 20px;
        }
        .store-header h1 {
          font-size: 28px;
          margin: 0 0 4px;
          font-weight: 500;
          letter-spacing: 0.3px;
        }
        .store-header p {
          margin: 0;
          font-size: 14px;
          color: #6B6055;
          font-style: italic;
        }
        .cart-trigger {
          display: flex;
          align-items: center;
          gap: 8px;
          background: #2B2622;
          color: #EFEAE2;
          border: none;
          padding: 10px 18px;
          border-radius: 3px;
          font-family: inherit;
          font-size: 14px;
          cursor: pointer;
          position: relative;
          transition: background 0.15s ease;
        }
        .cart-trigger:hover { background: #45392F; }
        .count-badge {
          background: #B5673A;
          color: white;
          font-size: 11px;
          min-width: 18px;
          height: 18px;
          border-radius: 9px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          padding: 0 4px;
        }
        .product-grid {
          max-width: 960px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 28px;
        }
        .product-card {
          background: #F7F3EC;
          border: 1px solid #DED4C4;
          overflow: hidden;
        }
        .swatch { height: 130px; }
        .product-info { padding: 16px 16px 18px; }
        .product-tag {
          font-size: 11px;
          color: #8A7C6C;
          font-style: italic;
        }
        .product-info h3 {
          font-size: 16px;
          font-weight: 500;
          margin: 6px 0 14px;
          line-height: 1.3;
        }
        .product-row {
          display: flex;
          align-items: center;
          justify-content: space-between;
        }
        .price { font-size: 15px; }
        .add-btn {
          background: transparent;
          border: 1px solid #2B2622;
          color: #2B2622;
          font-family: inherit;
          font-size: 13px;
          padding: 6px 14px;
          border-radius: 2px;
          cursor: pointer;
          min-width: 64px;
          transition: all 0.15s ease;
        }
        .add-btn:hover { background: #2B2622; color: #EFEAE2; }
        .add-btn.added {
          background: #6B7C5C;
          border-color: #6B7C5C;
          color: white;
        }
        .drawer-backdrop {
          position: fixed;
          inset: 0;
          background: rgba(30, 26, 22, 0);
          pointer-events: none;
          transition: background 0.25s ease;
          z-index: 10;
        }
        .drawer-backdrop.open {
          background: rgba(30, 26, 22, 0.35);
          pointer-events: auto;
        }
        .drawer {
          position: fixed;
          top: 0;
          right: 0;
          height: 100%;
          width: 340px;
          max-width: 88vw;
          background: #F7F3EC;
          transform: translateX(100%);
          transition: transform 0.28s ease;
          display: flex;
          flex-direction: column;
          font-family: 'Georgia', serif;
          color: #2B2622;
        }
        .drawer.open { transform: translateX(0); }
        .drawer-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 20px 20px 16px;
          border-bottom: 1px solid #DED4C4;
        }
        .drawer-header h2 { font-size: 19px; font-weight: 500; margin: 0; }
        .icon-btn {
          background: none;
          border: none;
          cursor: pointer;
          color: #2B2622;
          padding: 4px;
        }
        .empty-state {
          padding: 40px 24px;
          text-align: center;
          color: #6B6055;
        }
        .empty-state p { font-size: 15px; margin: 0 0 6px; }
        .empty-state span { font-size: 13px; }
        .cart-list {
          list-style: none;
          margin: 0;
          padding: 8px 20px;
          flex: 1;
          overflow-y: auto;
        }
        .cart-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 0;
          border-bottom: 1px solid #E7DFD1;
        }
        .mini-swatch {
          width: 40px;
          height: 40px;
          flex-shrink: 0;
          border-radius: 2px;
        }
        .cart-item-info {
          display: flex;
          flex-direction: column;
          flex: 1;
          min-width: 0;
        }
        .cart-item-name { font-size: 14px; }
        .cart-item-price { font-size: 12px; color: #8A7C6C; }
        .qty-controls {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
        }
        .qty-controls button {
          background: #EFEAE2;
          border: 1px solid #DED4C4;
          border-radius: 2px;
          width: 22px;
          height: 22px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }
        .remove-btn {
          background: none;
          border: none;
          color: #A85A45;
          cursor: pointer;
          padding: 4px;
        }
        .drawer-footer {
          padding: 16px 20px 24px;
          border-top: 1px solid #DED4C4;
        }
        .total-row {
          display: flex;
          justify-content: space-between;
          font-size: 16px;
          margin-bottom: 14px;
        }
        .clear-btn {
          width: 100%;
          background: transparent;
          border: 1px solid #2B2622;
          padding: 10px;
          font-family: inherit;
          font-size: 13px;
          cursor: pointer;
          border-radius: 2px;
        }
        .clear-btn:hover { background: #2B2622; color: #EFEAE2; }
      `}</style>
    </div>
  );
}

export default function AddToCartContext() {
  return (
    <CartProvider>
      <StoreApp />
    </CartProvider>
  );
}
