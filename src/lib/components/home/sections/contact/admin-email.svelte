<script lang="ts">
	import { Heading, Hr, Html, Section, Text } from '@sveltelaunch/svelte-5-email';

	interface Props {
		name: string;
		email: string;
		subject: string;
		message: string;
	}

	let { name, email, subject, message }: Props = $props();

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
