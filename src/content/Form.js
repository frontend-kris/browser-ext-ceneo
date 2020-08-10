import React from 'react'

class Form extends React.Component {

	componentDidMount() {
		
		const container = document.getElementById('webext-root')
		const form = container.shadowRoot.getElementById('ceneoap-form-head-search-royalcode')
		const input = container.shadowRoot.getElementById("ceneoap-search-query")
		const fn = () => {
			let actionValue = 'https://www.ceneo.pl/;szukaj-' + input.value.replace(' ', '+') + '#pid=22504&crid=360697'
			form.attributes.action.textContent = actionValue
		}
		input.addEventListener("keydown", fn)
		input.addEventListener("keyup", fn)
		input.addEventListener("change", fn)
	}

	render(){
		return (
			<div class="ceneo-searchbox">
					<p class="header">Wyszukiwarka Ceneo.pl</p>
					<p class="subheader">Nie daj się naciągnąć. Sprawdzaj szybko gdzie najtaniej!</p>
					<form method="get" 
								name="form-head-search" 
								id="ceneoap-form-head-search-royalcode"
								action="">
						<input type="text" placeholder="Wpisz czego szukasz" id="ceneoap-search-query" name="" />
						<button type="submit" title="Szukaj na Ceneo.pl">Szukaj</button>
					</form>
					<p class="author">
						<a href="https://royalcode.eu" target="_blank">royalcode.eu</a>
						<span>Wtyczka jest dla Ciebie użyteczna? <a href="https://www.buymeacoffee.com/frontendkris" target="_blank">Postaw mi kawę</a> ☕ :)</span>
					</p>
			</div>
		)
	}
}

export default Form
