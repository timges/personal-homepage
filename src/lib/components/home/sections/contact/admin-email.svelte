<script lang="ts">
	import { Heading, Hr, Html, Section, Text } from 'svelte-email';

	export let name: string;
	export let email: string;
	export let subject: string;
	export let message: string;

	const main = {
		padding: '20px',
		backgroundColor: '#F7F5F0'
	};

	const heading = {
		fontSize: '24px',
		fontWeight: 'bold',
		marginBottom: '20px'
	};

	const text = {
		fontSize: '16px',
		marginBottom: '10px'
	};
</script>

<Html>
	<Section style={main}>
		<Heading style={heading}>New message from {name}</Heading>
		<Hr />
		<Text style={text}>From: {name}</Text>
		<Text style={text}>Email: {email}</Text>
		<Text style={text}>Subject: {subject}</Text>
		<Text style={text}>Message: {message}</Text>
	</Section>
</Html>
