---
layout: page
permalink: /publications/
title: papers
description: Accepted papers at the workshop.
nav: true
nav_order: 4
---

<!-- _pages/publications.md -->

<!-- Bibsearch Feature -->

{% include bib_search.liquid %}

<div class="publications">

  {% bibliography --group_by none --query @*[selected=true]* %}

</div>
