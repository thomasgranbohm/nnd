import styles from "../styles/Home.module.css";

export async function getServerSideProps() {
	const resp = await fetch("http://backend:8080/api");
	const json = await resp.json();
	return {
		props: json,
	};
}

export default function Home({ title }) {
	return (
		<div className={styles.container}>
			<header>
				<h1>{title}</h1>
			</header>
		</div>
	);
}
