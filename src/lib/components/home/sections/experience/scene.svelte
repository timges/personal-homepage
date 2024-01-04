<script lang="ts">
	import { T, useFrame, useThrelte } from '@threlte/core';
	import { Grid, useTexture } from '@threlte/extras';
	import gsap from 'gsap';
	import { ScrollTrigger } from 'gsap/dist/ScrollTrigger';
	import { onMount } from 'svelte';
	import { RepeatWrapping } from 'three';
	import Clouds from './glb-models/clouds.svelte';
	import ModelTim from './glb-models/model-tim.svelte';
	import Terrain from './glb-models/terrain.svelte';

	type Vector3 = {
		x: number;
		y: number;
		z: number;
	};

	let cameraVector3: Vector3 = {
		x: 8,
		y: 10,
		z: 24
	};

	const terrainRotation = {
		x: 0,
		y: 0,
		z: 0
	};

	const scrollbarWidth = window.innerWidth - document.body.clientWidth;
	let innerHeight: number = window.innerHeight;
	let innerWidth: number = window.innerWidth;
	let walkAnimTime = { time: 0 };
	const { renderer, camera, scene } = useThrelte();
	const sky = useTexture('/sky.jpg');

	let characterActions: THREE.AnimationAction[];
	let characterMixer: THREE.AnimationMixer;

	$: renderer?.setSize(innerWidth - scrollbarWidth, innerHeight);
	$: scene && $sky ? setupScene() : null;

	useFrame(() => {
		camera.current.position.set(cameraVector3.x, cameraVector3.y, cameraVector3.z);
		terrainRotation.x -= 0.0009;
		// characterMixer?.setTime(walkAnimTime.time);
	});

	onMount(() => {
		gsap.registerPlugin(ScrollTrigger);
		const tl = gsap.timeline({
			scrollTrigger: {
				trigger: '#animation-container',
				start: 'top top',
				end: 'bottom bottom',
				scrub: 0.5
			}
		});
		// tl.to(cameraVector3, { x: 10, y: 5, z: 10, duration: 1 }, 0);
		tl.to(walkAnimTime, { time: 4, duration: 1 }, 0);
	});

	function handleCharacterLoad(event: CustomEvent) {
		characterActions = event.detail.actions;
		characterMixer = event.detail.mixer;
		characterMixer.timeScale = 0.7;
		characterActions['walk-cycle']?.play();
	}

	function updateRenderer() {
		renderer?.setPixelRatio(window.devicePixelRatio);
		renderer?.setSize(innerWidth - scrollbarWidth, innerHeight);
	}

	function setupScene() {
		$sky?.offset?.set(-0.2, -0.2);
		scene.background = $sky!;
		scene.backgroundBlurriness = 1;
	}
</script>

<svelte:window bind:innerHeight bind:innerWidth on:resize={updateRenderer} />
<!-- <Grid receiveShadow axes={'xyz'} infiniteGrid rotation={[Math.PI / 2, 0, 0]} /> -->
<T.PerspectiveCamera
	makeDefault
	position={[cameraVector3.x, cameraVector3.y, cameraVector3.z]}
	on:create={({ ref }) => {
		ref.lookAt(0, 2, 0);
	}}
	aspect={innerWidth / innerHeight}
/>

<ModelTim on:loaded={handleCharacterLoad} />
<Terrain {terrainRotation} position={[0, 0.05, 0]} />
<Clouds position={[-30,-5,15]} rotation={[0,.3,0]}/>
<Clouds position{[5,0,0]} />
<T.DirectionalLight intensity={0.7} position={[-5, 25, 10]} castShadow/>
<T.AmbientLight intensity={.2} />
<T.HemisphereLight intensity={1} />
