---
layout: page
permalink: /submit/
title: submit
description: Submitting a paper to the workshop.
nav: true
nav_order: 3
---

All submission must include a 1-page *Storyline*, as described here: [https://jvgemert.github.io/storyline.pdf](https://jvgemert.github.io/storyline.pdf) (examples included). 
Please follow the 1-page *Storyline* template available as a [LaTeX](https://jvgemert.github.io/assets/pdf/storyline-empty.tex) or [PDF](https://jvgemert.github.io/assets/pdf/storyline-empty.pdf) file. 



We have 2 tracks: 


- **Storyline-only track**: only the 1-page *Storyline*. This track is non-archival, so not part of any published proceedings, but authors can present a poster at the workshop for feedback and brainstorming. 


- **Full paper track**: 14 pages maximum (excluding references) in [ECCV 2026 format](https://eccv.ecva.net/Conferences/2026/SubmissionPolicies) with it's 1-page *Storyline* in the appendix. Accepted papers will be part of the official workshop proceedings. Authors present a poster and we will select some work for oral presentation.



Submit on [![OpenReview](/assets/img/openreview.png)](https://openreview.net/group?id=thecvf.com/ECCV/2026/Workshop/ET)

Timeline (any time on earth in 2026):

- August 1: Final submission deadline (for both tracks).
- August 7: Author acceptance notification.
- August 10: Workshop author registration deadline (a full registration is required).
- August 14: Camera-ready deadline.

Submissions without a *Storyline* or a *Storyline* that does not follow the structure in [https://jvgemert.github.io/storyline.pdf](https://jvgemert.github.io/storyline.pdf) are at risk of desk rejection. 

Not all elements of the *Storyline* always apply. Use the parts of the *Storyline* that are relevant to the research. 

The *Storyline* will be used by reviewers to assess the work; see the [reviewer questions](#reviewer-questions) below.


All submissions are anonymous, and full-papers must follow the [ECCV 2026 Submission Policies](https://eccv.ecva.net/Conferences/2026/SubmissionPolicies).

Please note, we use Openreview, so if you don't have an Openreview profile, please create one as soon as possible, and use an institutional email if possible; otherwise, approval might take up to 2 weeks. 

Note: We might require reciprocal reviewing in case we get an unexpected high number of submissions.

---

### Call for papers

Our workshop solicits contributions describing research work that explains why deep learning methods work, debunks or reinterprets existing common views, posits empirical regularities/laws, new empirical theories, etc.



Partly inspired by the [Workshop on Scientific Methods for Understanding Deep Learning](https://scienceofdlworkshop.github.io) we consider the following topics a good fit:


- Propose, validate and/or falsify hypotheses about the inner workings of deep networks,
- Empirical observations to inform or inspire theoretical models,
- Minimal analytical models that explain observed phenomena,
- Controlled experiments for compiling rigorous empirical evidence,
- Reproduce prior empirical results in simplified or extended settings,
- introduce new experimental tools and methodologies for studying representation learning.


This is not meant as an exhaustive limited list and we aim for inclusion. We will interpret the scope broadly, and will err on the side of inclusion. Bold numbers are neither sufficient, nor necessary.

That said, we do aim for *understanding*, for *theory*, for *empiricism*, and for *representation learning*. Which means we do not aim for pure mathematical theory, and not about idiosyncratic systems nor data analysis.

Thus, the following type of papers are less fitting our scope:

- Improving the state of the art without evidence why (we aim for understanding-based research);
- Improving the state of the art without evidence that the improvements generalize (*we aim for "theory"; ie: generalization beyond a single idiosyncratic system*);
- Pure mathematical machine learning theory paper (*we aim for empirical theory*);
- "How well can Large Pre-trained AI Model X do task Y?"  (*We care less about finished artifacts with idiosyncratic training data, but instead aim for representation learning, so, with some "learning" involved*).

---

### Storyline: empirical rigor 

The workshop will have a call for papers on empirical insights,
empirical theory, how to do empirical representation learning research,
meta-science for representation learning, *etc.* We are inspired by
Hitchens's razor: *What can be asserted without evidence can also be
dismissed without evidence* and the *Troubling Trends in ML scholarship*
paper {% cite lipton2019research %} and
others {% cite greydanus2024scaling %}; {% cite metascience4ml %}; {% cite Picard2021seed %}; {% cite sculley2018winnerCurse %}
and design the review process accordingly, including questions such as

- What is interesting about the paper?

- Explanation vs Speculation: are all claims supported with empirical
  evidence?

- Sources of empirical gains: what empirical evidence is there to
  support that the improved accuracy comes from what is claimed, and not
  due to some other confounding effect? (*e.g.* hyper-parameters?)

- Methodological generalizability: how are the findings relevant to
  other methods/papers?


To accommodate empirical rigor, we will use  a 1-page *Storyline*, to make empirical evidence explicit. The *Storyline* is described here: [https://jvgemert.github.io/storyline.pdf](https://jvgemert.github.io/storyline.pdf) (examples included). 
All papers need to offer a *Storyline*, we will also allow a *Storyline-only* submission, where poster boards are availble for early brainstorming. Additionally, we offer poster boards to relevant work from the main
conference, offering authors an additional presentation venue.



---


### Reviewer Questions

(Tentative) These are the questions we ask to reviewers on OpenReview.



###### **1. Summary of the paper**
Please give a short summary of the paper.

[Textbox]

###### **2.  Argumentation** 
See the 1-page *Storyline* (points 1-4) in the appendix of the submitted paper. Note, that not all parts of the *Storyline* need to be present, only the relevant parts. Consider the following questions. 
- What argumentation is there that the setting is reasonable/interesting? (*Storyline: 1 Why Interesting?*)
- Are the related methods factual, relevant, complete? (*Storyline: 2 How done now?*)
- Is the Problem and it's consequences clearly described? ("So What?")  (*Storyline: 3: Problem*)
- Is the Proposed improvement matching the problem? (*Storyline: 4: Proposed*)

[Textbox]

###### **3. Empirical rigor/evidence (experiments)**
See the 1-page *Storyline: 5 Experiments* in the appendix of the submitted paper. Note that not all experimental questions discussed in the *Storyline* need to be present, only the relevant experimental questions. Consider how is the following shown, and is it shown correctly: 
- Argumentation for the chosen datasets? (*Storyline: c1, u1*)
- Baseline/competition methods are well reproduced/reasonable?  (*Storyline: c2, u2*)
- Baseline/competition methods suffering from the identified problem, and not some other confounder? (*Storyline: c3, u3*)
- The proposed improvement come from what is claimed, and not due to some other confounding effect? (_e.g._ hyper-parameters?) (*Storyline: c4, u4*)

[Textbox]

###### **4. Fit to the scope of the workshop**
Is the paper a good fit to the goals of the workshop?
- If the state of the art is improved, is there sufficient evidence for why?
- How much empirical theory is there? Ie: how well would the paper's insight generalize to other works?
- Is it mainly mathematical theory without much empirical evidence?
- Is it mainly an analysis of an existing (pre-trained) artifact without interventions?

[Textbox]

###### **5. Strengths and weaknesses**
What does the paper do well, and what can be improved.

[Textbox]

######  **6. Conclusion**
Reasons for the decision; feedback, suggestions for improvements, etc.

[Textbox]

######  **7. Decision**
1. Clear accept
2. Weak Accept
3. Weak Reject
4. Clear reject






<p>&nbsp;</p>

---

<p>&nbsp;</p>

### Bibliography

  {% bibliography --cited %}
