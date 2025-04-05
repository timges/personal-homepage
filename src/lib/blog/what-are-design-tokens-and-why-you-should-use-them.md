---
title: what are design-tokens and why you should use them
description: a quick dive into the world of design tokens. how can i utilize design tokens? what
are their benefits? what is the ideal setup?
date: '2025-01-18'
categories:
  - design-tokens
  - design-systems
  - frontend
published: false
---

## what are design-tokens and why you should use them

when you explore the world of design-systems, there is a topic you cant really miss: `design-tokens`. but what are design-tokens`? i will try to answer this question here by giving you an overlook on the topic and how you might get started incorporating them in your  projects. 

### definition

so by definition, design tokens are simply `variables` that store the fundamentals of a design system, like e.g. `color`, `typography`, `spacing`, and a bunch more. there is a chance that you've stumbled across the book [atomic design by brad frost](https://shop.bradfrost.com/). a lot of people call it the _bible_ for design systems. and i agree. but as time has passed, things have evolved and we must extend his original ideas to find a place for design tokens.


- nucleons (design tokens)
- atoms (simple components like buttons, inputs, labels)
- molecules (group of atoms to form components like a `search-field` )
- organisms (more complex components consisting of multiple components. e.g. navbar)

so as you can see, design tokens form the rawest base of a design system, without them there would be no atoms, no molecules, no organisms. that's why they are so important.

### why, though?

implementing a design token solution comes with several benefits both large corporations but also private hobbyists can profit from.

- Consistency
- Scalability
- Collaboration

#### Consistency

having a design-token system in place comes with the great benefit of only having to define design decisions *once*.
all implementations, across all platforms will be based on the tokens and thus stored in a central space.

#### Scalability

when your implementation is fully based on design tokens you can easily add new modes, brands or themes to your
design system by simply creating token-value overrides for the respective scope

#### Collaboration

design tokens are a great way to bridge the gap between designers and developers. they provide a common language
that both parties can understand and work with. This eliminates the risk of creating inconsistencies between design and implementation.


### Token Architecture

as you have different kind of nucleon particles in physics, you also have different kind of tokens. three of them to be precise, which are all equally important to form the core of our atoms. designers and engineers agreed that there are three different levels, but they did not align on proper names for them, so here are all variants i've found so far:

1. reference / definition / raw / primitive / global tokens
2. alias / system / semantic / functional tokens
3. component / pattern / tokens

i personally prefer `reference tokens`, `semantic tokens`, and `component tokens`. those are the terms i will use for the rest of the article.

- value -> #ffddff
- reference token -> `color-coral-900`
- semantic token -> `color-background-basic`
- component token -> `color-button-background-primary`

#### reference token

reference tokens are the abstraction of the `raw value`. they are not supposed to be used directly but rather
represent the holistic palette of a design system

#### semantic token

semantic tokens don't store a value but rather point to a reference token. they add semantic meaning
to a value so to say. they should be generic to be used across wide ranges of the applications.

#### component tokens

sometimes you'll find some components that might not fully match the large scope of a semantic token. that's where component specific tokens come into
place to create an override on smaller scope (atom / molecules).


### Token Types

All primitive values