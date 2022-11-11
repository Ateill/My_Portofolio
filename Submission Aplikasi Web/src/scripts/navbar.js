import * as $ from 'jquery';
import { ListAllMovie } from './movies';

class Navbar extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' })
            .innerHTML = `
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.1/css/bootstrap-select.css" />
            <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
            <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-select/1.12.1/js/bootstrap-select.js"></script>
            <slot name="Navbar"></slot>
        `
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.innerHTML = `
        <style>
            .navbar {
                background-color: #191A19;
                margin-left: 3rem;
            }
            .navbar-brand, .navbar-brand:hover {
                color: #C21010;
                font-size: 24px;
            }
            .form-select {
                display: inline-block;
                margin-right: 3rem;
                background-color: #302e2e;
                border: 1px solid #191A19;
                border-radius: 8px;
                color: #DBD8E3;
            }
            .form-select:focus {
                border: 1px solid #C21010;
            }
            option {
                height: 50px;
            }
        </style>

        <section slot="Navbar">
            <nav class="navbar justify-content-between">
                <h1 class="navbar-brand">The Movie DB</h1>
                <select class="form-select form-select-sm w-25" aria-label="Default select example">
                    <option selected>Search..</option>
                </select>
            </nav>
        </section>
      `;

      let check = function() {
        setTimeout(function () {
          if (ListAllMovie === null){
            setTimeout(check, 500);
          }
          else {
            ListAllMovie.forEach(movie => {
                $(".form-select").append(`
                    <option id=${movie.id} >${movie.title}</option>
                `)
            });
          }
        }, 500);
      };
      check();
    }
}

customElements.define('app-navbar', Navbar);