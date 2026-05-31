---
layout: page
permalink: /synopsis/
title: synopsis
description: About the workshop.
nav: true
nav_order: 2
---


##### Representation learning

Representation learning is the current de-facto research paradigm in
Computer Vision, building on deep learning methods trained on large
datasets to learn visual representations. In this ECCV workshop we
explore what makes representation learning research "scientific". Other
scientific research fields revolve around empirical theories, *e.g.*:
the theory of evolution {% cite darwin1859 %} in Biology, the theory of
relativity {% cite einstein1916foundation %} in Physics, and dual process
theory {% cite kahneman2011thinking %} in Psychology. In representation
learning, however, the role of empirical theories is less clear. This
workshops promotes empirical theory research in representation learning.
While doing so, it explores questions such as: what is empirical theory?
What empirical theories do we (implicitly) have? How can we encourage
rigorous empirical research methods? How can we build empirical
theories?

##### Machine learning theory vs empirical theory

Empirical theory differs from what is typically called *theory* in
machine learning. In machine learning, computational learning
theory {% cite understandingMLtheory %} is rigorously math driven, exploring
mathematical performance bounds, time complexity, and feasibility of
learning. It has important and deep mathematical results including
theorems about no-free-lunch {% cite Wolpert1997 %} and universal
approximation {% cite representationTheorem %}, VC-theory {% cite vapnik95 %},
PAC-learning {% cite PAClearning %}, Rademacher
complexity {% cite understandingMLtheory %}, the neural tangent
kernel {% cite neuralTangent %}, *etc.*. In representation learning, however,
models are trained by searching through a high dimensional non-convex
solution space while navigating an exponential search space of
hyper-parameters {% cite choi2019empirical %}; {% cite feurer2019hyperparameter %}, which
precludes standard ML practices for hyper-parameter tuning like
*e.g.* (nested) cross-validation {% cite krstajic2014cross %} which is
prohibitively computationally expensive due to the large datasets
involved, and thus simply not done in
practice {% cite bouthillier2021accounting %}; {% cite bouthillier19UnreproducibleIsReproducible %}.
Precise, rigorous, theoretical optimality is found as too restrictive
and seen as a practically unnecessary artificial hurdle. Optimality is
replaced with empirical '*good enough*' approximate optimizations. This
workshop does not focus on mathematical proofs, but in contrast, focuses
on empirical experimental evidence.


##### Empirical evidence and benchmarking in representation learning

Empirical evidence is crucial in representation learning. Many papers
experimentally demonstrate that a method can be engineered to boldly
improve upon existing state of the art benchmark scores. That such a
benchmark-breaking method even exists is valuable existential empirical
evidence and propels the
field {% cite hardt2025mlBenchmarkScience %}; {% cite krizhevsky2014oneWeirdTrick %}; {% cite ILSVRC15 %}.
Often, however, it is not clear where the improvements
originate {% cite deBoer2023IsthereProgress %}; {% cite bouthillier2021accounting %}; {% cite lucic2018gans %}; {% cite musgrave2020metricLearnRealityCheck %}; {% cite musgrave2021unsupervisedRealityCheck %}.
Without such understanding, these empirical results lack empirical
theoretical hypotheses: a clear, causal, link to the reasons that
underlie the improvement. If, for example, an improvement is due to
better tuned hyper-parameters, this does not increase our understanding,
because we already know that better tuning hyper-parameters
helps {% cite anand2020blackMagicinDL %}; {% cite UnreproducibleICML19 %}; {% cite Brigato2021tuneIt %}; {% cite Picard2021seed %}.
What, for example, would make it interesting here, is if the method for
finding these hyper-parameters would generalize to other work, and how
this hypothesis can be empirically justified. In this workshop, we aim
to go beyond individual systems that work well, and instead aim for
empirical theory: findings that generalize beyond idiosyncratic
combinations of datasets, hyper-parameter settings and accidental
optimization minima. We promote hypothesis-driven empirical research
that gives insight, and breaking SOTA is neither sufficient nor
necessary.

##### Empirical theory: rigor in experimental evidence

With *empirical theory*, we aim for a sweet spot between theoretical
mathematical models on one side, and purely empirical benchmark-breaking
systems on the other side. It's about tracing the sources of empirical
gain {% cite lipton2019research %}, and explicitly providing experimental,
hypothesis-driven, empirical evidence that separates explanation from
speculation {% cite lipton2019research %}. It is about understanding the
training and the evaluating of deep learning models, their design and
their components, optimizers, losses, and how this generalizes over
problem and datasets types. We aim for understanding when and what makes
a method applicable in other work. Such type of research, of course,
already existed in the broader representation learning literature.
Examples include the shift-invariance of
CNNs {% cite Chaman_2021_CVPRshiftInvCNN %}; {% cite kayhan2020translation %}; {% cite zhang2019blurPool %},
and their kernel
size {% cite ding2022scalingKernels %}; {% cite grabinski2023fixDownSample %}; {% cite tomen2021spectral %},
residual connections
variants {% cite greff2017highway %}; {% cite veit2016residualIsEnsemble %}; {% cite zhuhyperHyperconnect %},
summing or multiplying activations {% cite ma2024sumOrStar %},
gating {% cite qiu2025gated %}, registers in
transformers {% cite darcet2024visionRegisters %} {% cite jiangvisionDontTrainRegisters %}; {% cite shi2026visiontransformersneedregisters %},
object-centric learning {% cite rubinstein2025doneObjectCentric %}, subliminal
learning {% cite schrodi2025towardsUnderstandSubliminal %} and even empirical
reproducibility {% cite UnreproducibleICML19 %}; {% cite pineau2021improving %}; {% cite raff2019stepquantifyingindependentlyreproducible %}; {% cite yildiz2021reproducedpapers %},
and many more. Beyond such insight-driven papers, there is work on
explicit empirical theory building, including empirical neural scaling
laws {% cite scalingLaws %}, the lottery ticket
hypothesis {% cite frankle2018lottery %} {% cite pinson2026itslotteryitsrace %}, the
Platonic representation hypothesis {% cite huh2024platonicHypothesis %}, *etc.*
This workshop shines a spotlight on such work, aiming to incentivize
empirical insights, and empirical theory building for the entire field
of representation learning.

### Relation to other workshops and initiatives

Pre-registration in machine learning was explored at NeurIPS in 2011 in
the Pre-registration workshop: An alternative publication model for
machine learning research {% cite AlbanieNeurIPS11preRegistrationWorkshop %}.
The ML-Retrospectives, Surveys & Meta-Analyses
workshop {% cite YadavMLreprospectiveWorkshop %} hosted at NeurIPS 2019, ICML
2020, NeurIPS 2020 and the recent Metascience for Machine
Learning {% cite metascience4ml %} initiative are related to meta-science for
representation learning. The recent *Mechanistic Interpretability
Workshop* {% cite NandaMechanisticInterpretabilityWorkshop %} at ICML 2024 and
NeurIPS 2025 and the *Workshop on Scientific Methods for Understanding
Deep Learning* {% cite KadkhodaieSciForDLWorkshop %} at ICLR 2025/2026 are great
examples of what we aim to achieve, albeit now in representation
learning. We will make use of pre-registration to separate interesting
questions from outcomes, and are inspired by meta-science.

We here aim to foster, and build a community for understanding-based
research that is currently scattered over multiple venues, and mixed in
with improvement-based research.


### Bibliography

  {% bibliography --cited %}
