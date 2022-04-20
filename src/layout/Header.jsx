function Header() {
	return (
	<header>
		<nav className="green darken-1">
			<div className="nav-wrapper">
				<a href="./" className="brand-logo">React Movies</a>
				<ul id="nav-mobile" className="right hide-on-med-and-down">
					<li><a href="https://github.com/oNestly/movies-react-app" target="_blank" rel="noreferrer">Repo</a></li>
				</ul>
			</div>
		</nav>
	</header>
	)
	

}

export { Header }