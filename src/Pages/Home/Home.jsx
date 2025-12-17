import React from 'react'

const Home = () => {

  const toNavigate = (nav) =>{

  }

  return (
  <ul class="list-group w-50 m-auto">
  <li class="list-group-item bg-info text-light fw-bold">REACT CONCEPTS</li>
  <li class="list-group-item">
    Hooks
    <ul class="list-group mt-2">
      <li class="list-group-item ps-4">UseState
          <ul class="list-group mt-2">
            <li class="list-group-item ps-4">Counter</li>
            <li class="list-group-item ps-4">Add to Card</li>
          </ul>
      </li>
      <li class="list-group-item ps-4">UseEffect</li>
    </ul>
  </li>
  <li class="list-group-item">Main Item 3</li>
</ul>

  )
}

export default Home