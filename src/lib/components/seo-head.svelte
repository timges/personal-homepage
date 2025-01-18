<script lang="ts">

	import items from '../components/home/sections/my-work/items';
    interface Props {
        title?: string;
        description?: string;
        mainEntityOfPage?: boolean;
    }

    let { title = '', description = '', mainEntityOfPage = false }: Props = $props();
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="description" content={description} />
	<link rel="alternate" hreflang="en" href="https://tim-gesemann.dev/" />
	<link rel="canonical" href="https://tim-gesemann.dev/" />
	{#if mainEntityOfPage}
		{#each items as item (item.id)}
			{@html `
      <script type="application/ld+json">
        {
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          "name": "${item.title}",
          "description": "${item.description}",
          "featureList": "${item.tags.join(', ')}",
          "operatingSystem": "All, Windows, Linux, Mac OS, Android, iOS",
          "url": "${item.link}",
          "applicationCategory": "https://schema.org/WebApplication"
        }
        </script>`}
		{/each}
		<script type="application/ld+json">
    {
      "@context" : "https://schema.org",
      "@type" : "WebSite",
      "name" : "Tim Gesemann - Fullstack Software Enginee",
      "url" : "https://tim-gesemann.dev"
    }
		</script>
		<script type="application/ld+json">
			{
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://tim-gesemann.dev/"
          }
        ]
      }
		</script>
	{/if}
</svelte:head>
