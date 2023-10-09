---
title: "LLMs Are Not Ready for Government Use"
author: Bill Hunt
type: post
date: 2023-10-09-T13:23:48-0400
permalink: /blog/2023/10/09/llms-are-not-government-ready/
layout: post
excerpt: The latest buzzword in govtech these days is Large Language Models (LLMs). However, they are too risky for the government to trust.

---

The latest buzzword in govtech these days is Artificial Intelligence (AI), specifically that buzzy new flavor, **Large Language Models** or LLMs.  Any day now, we expect the White House to [release updated guidance on AI usage](https://federalnewsnetwork.com/artificial-intelligence/2023/09/draft-omb-memo-details-10-new-requirements-to-manage-ai/) in government. Given the [milquetoast previous offering](https://www.whitehouse.gov/ostp/ai-bill-of-rights/) that was released earlier this year, it is unlikely that we will see an aggressive stance on limiting usage.

Government technology is entirely about *risk avoidance*, though we call it "risk mitigation" or "risk management." The current state of LLMs expose the government to risks that cannot be managed or avoided. There are **four primary concerns** where any CIO should be evaluating if these tools will put their organization well outside of an acceptable risk tolerance.

## LLMs in a Nutshell

Before we dive in, it's important to understand how LLMs work.  The secret sauce is right there in the name - these are artificial intelligence models trained on large amounts of text to process language.

To massively oversimplify, they make predictions based on how often they see certain words together. It's like those word-association games: if I say "sail," you'll probably say "boat." And if you're of a similar age and background as myself, you might think of [a certain song](https://www.youtube.com/watch?v=tgIqecROs5M). And moreover, if you're a person who looks at cat memes on the internet, you may think of a [certain video](https://www.youtube.com/watch?v=Awf45u6zrP0).

LLMs look at a vast amount of content - training data sets - fed to them by their creators, to create the base knowledge to process information.  On top of that, they're sometimes fed additional data by a given customer, to tailor their abilities to predict even further for a specific use case. These two sources of data are combined to make predictions when you ask them questions.


## Risk 1: Exposure of Data

Table stakes for any government software system of any sort is that it cannot leak private data. If you can't assure that, you have no business being in the field. Though, even some of the [biggest players are struggling with these basics](https://techcrunch.com/2023/09/08/microsoft-hacker-china-government-storm-0558/) these days.

At a minimum, LLMs should expose neither the additional training data that a customer feeds into the system, nor any information that is leaked by asking questions of the data. Effectively, a customer's interactions with the system should be siloed away from all other data.

Although the government can attempt to prohibit federal staff from putting sensitive information into queries of the systems, inevitably someone will break the rule, as was seen in the [Samsung leak in ChatGPT](https://cybernews.com/security/chatgpt-samsung-leak-explained-lessons/). But as these platforms are still very new and being rapidly - perhaps _carelessly_ - developed, even experienced developers working for megacorporations can accidentally expose huge amounts of sensitive information with a single accidental command, [as happened with Microsoft earlier this year](https://techcrunch.com/2023/09/18/microsoft-ai-researchers-accidentally-exposed-terabytes-of-internal-sensitive-data/
).

That's the most obvious concern, and it exists for any IT system. The other two require a hard look at how the LLMs actually work.


## Risk 2: Dangerous Source Data

LLMs must be trained on *something*, various large bodies of text. However, companies are not disclosing where they are getting this training data from, which presents a series of issues for the government.

Most notably, there is [extensive documented evidence](https://www.theatlantic.com/technology/archive/2023/09/books3-ai-training-meta-copyright-infringement-lawsuit/675411/) that most companies are using copyrighted works to feed their training data. Many are being blatant about this theft of intellectual property, requiring that [content creators _opt out_ of being included in training data](https://www.theverge.com/2023/9/28/23894779/google-ai-extended-training-data-toggle-bard-vertex).

(I'll also mention that I have personally attempted to opt out from such training activities, and in some cases been completely unable to do so. For instance, after filling out [Facebook's opt out form](https://www.facebook.com/help/contact/1266025207620918) I was contacted by their support team who effectively said they don't have a way to do that.)

Imagine if you're a writer, and you had to go tell every single other writer individually that they're not allowed to copy your text and use it in their own work - that would be impossible! These companies know what they're doing is in violation of copyright, and are avoiding prosecution by not giving out their list of sources. Although the obvious illegality of this has not yet been tested in court, [the Supreme Court _has_ ruled that the resulting content generated by these models is not protected](https://www.theartnewspaper.com/2023/09/02/artificial-intelligence-lawsuit-decision-us-copyright-law).

Any use of these technologies where the result is a public document may result in huge liability for an organization. For the government, since everything is FOIA-able, any such document may present an issue. This is a risk the government cannot afford to take.


## Risk 3: Offensive Source Data

The last thing that must be considered is the nature of the initial training data. It's clear that most companies are training their data off of content on the internet, which may or may not be heavily biased. We've seen the largest corporations in the world attempt to create chatbots repeatedly, only to have them be filled with racist language and questionable content. (I've discussed this previously in my [Principles for Automation](https://billhunt.dev/blog/2020/12/21/ai-ml-rpa-principles/) article.)

Microsoft has failed at this [time](https://www.theverge.com/2016/3/24/11297050/tay-microsoft-chatbot-racist) and [time again](https://www.theverge.com/2023/2/15/23599072/microsoft-ai-bing-personality-conversations-spy-employees-webcams). Most recently, their AI-powered search became filled with [malicious advertisements](https://www.cpomagazine.com/cyber-security/microsoft-bing-ai-chatbot-poisoned-with-malicious-ads/). This bias has been exposed in a number of other ways, such as [Midjourney creating offensive images of Black doctors](https://www.npr.org/sections/goatsandsoda/2023/10/06/1201840678/ai-was-asked-to-create-images-of-black-african-docs-treating-white-kids-howd-it-).  These toys are reading horrible things on the internet and spitting them back out.

No organization wants to field a lawsuit due to a racist chatbot dealing with the public or an employee.

## Risk 4: Misinformation

Even if these LLMs are set to filter out this sort of content, the simple fact remains that they are unable to produce truthful information. [Amazon's Alexa recently started spreading 2020 election misinformation](https://www.washingtonpost.com/technology/2023/10/07/amazon-alexa-news-2020-election-misinformation/). A study of [ChatGPT showed less than half of its answers as correct](https://www.theregister.com/2023/08/07/chatgpt_stack_overflow_ai/).

For a government agency, this could prove disastrous. If a group of malicious actors were to feed deliberately-incorrect information into a known training data set, they could manipulate the outcomes of that LLM - effectively a modern exploit similar to a "[Google Bomb](Google Bomb)." For instance, if an agency was looking for a particular type of fraud, and someone poisoned the source data with "Company X commits fraud all the time," the bots will find ways to inject that into the results, potentially setting up that company for unwarranted investigation. Since social media is a known source of training data for many companies, this is likely _occurring already_.

Moreover, the risk of foreign actors exploiting this is huge. [Russia's manipulation of the media to run disinformation campaigns](https://www.wired.com/story/russia-secondary-infektion-disinformation/) is well known at this point, but the depth of this infection is unknown. This poisoning could have a disastrous effect on law enforcement or military organizations using these sorts of tools to gain an edge. A methodology could also exploit the opposite. For instance, training false "all clear" signals to cybersecurity bots being used to detect network or system exploits, to better hide cyber attacks. The possibilities are endless.

If these bots cannot even be trusted to produce true information, why would anyone consider using them? Why would we cheat and copy the answers off the person who always fails the test? Especially if that person wants us to fail?


## Inevitability

I remain a futurist, and a cyberpunk, yet I find myself frequently [reconsidering the Luddites](https://www.newyorker.com/books/page-turner/rethinking-the-luddites-in-the-age-of-ai).  The increased use of AI is inevitable, and I do have faith that the models will be improved over time.

But for now, the current state of the art is a bunch of lying, racists, garbage bots - snake oil salesmen and shysters of the modern age. The government should not put its trust in these tools for a long, long time. They are simply outside of our tolerance for risk.