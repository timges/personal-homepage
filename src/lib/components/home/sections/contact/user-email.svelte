<script>
	import { Body, Container, Head, Heading, Hr, Html, Link, Text } from 'svelte-email';
	export let name = 'John Doe';

	const heading = {
		fontSize: '24px',
		fontWeight: 'bold',
		marginBottom: '20px'
	};
	const text = {
		fontSize: '16px',
		marginBottom: '10px'
	};
	const body = {
		padding: '20px',
		backgroundColor: '#F7F5F0'
	};
	const hr = {
		margin: '20px 0 20px 0'
	};
	const container = {
		width: 'fit-content',
		margin: 'auto'
	};
	const link = {
		margin: '0 10px 0 10px'
	};
</script>

<Html>
	<Body style={body}>
		<Heading style={heading}>Hey {name}!</Heading>
		<Text style={text}>
			I just received you contact submission. Thanks for reaching out! I will try to get back to you
			asap 💯<br /><br />
			In the meantime you should make sure to check out my socials, to get to know more about me and
			my work 🤓
		</Text>
		<Hr style={hr} />
		<Container style={container}>
			<Link style={link} href="">
				<img src="https://tim-gesemann.dev/email-assets/github.png" alt="github-icon" />
			</Link>
			<Link style={link} href="https://www.linkedin.com/in/tim-gesemann/">
				<img src="https://tim-gesemann.dev/email-assets/linked-in.png" alt="linked-in-icon" />
			</Link>
			<Link style={link} href="https://twitter.com/geezy_tim">
				<img src="https://tim-gesemann.dev/email-assets/twitter.png" alt="twitter-icon" />
			</Link>
			<Link style={link} href="https://www.instagram.com/_nnameseg/">
				<img src="https://tim-gesemann.dev/email-assets/instagram.png" alt="instagram-icon" />
			</Link>
		</Container>
		<Hr style={hr} />
		<Text>
			Best regards, <br />
			Tim Gesemann
		</Text>
	</Body>
</Html>
