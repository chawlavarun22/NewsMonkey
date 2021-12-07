import React, { Component } from 'react'
import {
  Link
} from "react-router-dom";

export class Navbar extends Component {
  render() {
    return (
      <div>
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
          <div class="container-fluid">
            <Link class="navbar-brand" to="/">NewsMonkey</Link>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <Link class="nav-link" to="/Business">Business</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/General">General</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Entertainment">Entertainment</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Health">Health</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Science">Science</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Sports">Sports</Link>
                </li>
                <li class="nav-item">
                  <Link class="nav-link" to="/Technology">Technology</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

      </div>
    )
  }
}

export default Navbar
