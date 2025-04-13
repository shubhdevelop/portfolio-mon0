"use client"
import { Card, CardContent, CardLink } from "./components/Card"
import { Heading1, Heading3 } from "./components/Heading"
import { Separator } from "./components/Separator";
import Image from "next/image"
import pfp from "../public/pfp.jpg"
import { Timeline } from "./components/Timeline";
import { ByLine, Paragraph } from "./components/Paragraph";
import { useLanguage } from "./context/LanguageContext";
import { WaveAnimation } from "./components/WaveAnimation";

const config = {
  en: {
    // NEW: Profile Introduction
    profileIntro: `I'm a Full-Stack Developer who actually likes digging into code and building things that make life easier.
                   Seriously, I get a kick out of it. I once built a feature for Real Dev Squad that saved the team over 4000 minutes a week – that felt pretty good! I've also tinkered with open-source tools like DiceDb to add handy stuff like command history.
                   Right now, I'm helping Complyance expand their e-invoicing services. Tech-wise, I bounce between
                   JavaScript/TypeScript, React, Node, MongoDB, etc.`,

    experienceTimelineItems: [
      {
        title: "Fullstack Developer Intern at Complyance",
        description: `Phase 2 Expansion for E-Invoicing Services: Contributed to key features, including custom view creation and report generation, enhancing adaptability for new clients in the Malaysian market.
                      Cross-Functional Collaboration: Worked with compliance and engineering teams to meet complex regulatory requirements, ensuring a smooth and compliant e-invoicing experience for end-users.`,
        date: "Oct 2024 - Current",
      },
      {
        title: "Open Source Contribution at DiceDB",
        description: `Persistent Command History: Developed a feature enabling persistent command history across terminal sessions, allowing users to recall, reuse, and modify commands seamlessly. Integrated navigation support using arrow keys for efficient command recall.`,
        date: "Oct 2024 - Nov 2024",
      },
      {
        title: "Real Dev Squad",
        description: `Designed and implemented a superuser toggle feature for managing permissions and roles, benefiting 400+ users and saving over 4000 minutes of development time weekly. Authored an RFC to streamline API integration and documented the process for easy adoption. Actively contribute to code reviews and design discussions to ensure quality and team alignment.`,
        date: "Jun 2024 - Current",
      },
      {
        title: "Fullstack Developer Intern at Experiment Labs",
        description: "Small Internship stint at Experiment Labs",
        date: "Nov 2024",
      },
      {
        title: "Social Media Designer",
        description: `
             - Curating/ Designing social media post for the their Instagram handle
             - Creating engaging reels.
             - Brainstorming ideas for their upcoming post and reel.`,
        date: "Jan 2023",
      },
    ],
    EducationTimelineItems: [
      {
        title: "All India Senior School Certificate Examination ",
        description: "Kendriya Vidyalaya bailey Road",
        date: "April 2022",
      },
      {
        title: "Doing Graduation in BCOM honors ",
        description: "Shri Guru Gobind Singh College of Commerce, Delhi University",
        date: "Nov 2022 - June 2025",
      },
    ],

    // NEW: Call to Action
    callToAction: `↗ Got a project idea brewing ? hit me up! Let's see if we can build something cool.`

  },
  hi: {
    // NEW: Profile Introduction (Hindi)
    profileIntro: `मैं एक फुल-स्टैक डेवलपर हूँ जिसे वास्तव में कोड में गहराई तक जाना और जीवन को आसान बनाने वाली चीजें बनाना पसंद है।
                   सच कहूँ तो, मुझे इसमें मज़ा आता है। मैंने एक बार रियल देव स्क्वाड के लिए एक फीचर बनाया था जिसने टीम के सप्ताह में 4000 मिनट से अधिक बचाए – यह बहुत अच्छा लगा! मैंने DiceDb जैसे ओपन-सोर्स टूल के साथ भी काम किया है ताकि कमांड हिस्ट्री जैसी उपयोगी चीज़ें जोड़ी जा सकें।
                   अभी, मैं Complyance को उनकी ई-इनवॉइसिंग सेवाओं का विस्तार करने में मदद कर रहा हूँ। तकनीकी रूप से, मैं जावास्क्रिप्ट/टाइपस्क्रिप्ट, रिएक्ट, नोड, मोंगोडीबी, आदि के बीच काम करता हूँ।`,

    experienceTimelineItems: [
      {
        title: "कंप्लायंस में फुलस्टैक डेवलपर इंटर्न",
        description: `ई-इनवॉइसिंग सेवाओं के लिए चरण 2 विस्तार: मलेशियाई बाजार में नए ग्राहकों के लिए अनुकूलनशीलता बढ़ाते हुए, कस्टम व्यू निर्माण और रिपोर्ट जनरेशन सहित प्रमुख सुविधाओं में योगदान दिया।
                      क्रॉस-फंक्शनल सहयोग: अंतिम उपयोगकर्ताओं के लिए एक सहज और अनुपालन ई-इनवॉइसिंग अनुभव सुनिश्चित करते हुए, जटिल नियामक आवश्यकताओं को पूरा करने के लिए अनुपालन और इंजीनियरिंग टीमों के साथ काम किया।`,
        date: "अक्टूबर 2024 - वर्तमान",
      },
      {
        title: "DiceDB में ओपन सोर्स योगदान",
        description: `परसिस्टेंट कमांड हिस्ट्री: टर्मिनल सत्रों में परसिस्टेंट कमांड हिस्ट्री को सक्षम करने वाली एक सुविधा विकसित की, जिससे उपयोगकर्ता कमांड को सहजता से याद कर सकते हैं, पुन: उपयोग कर सकते हैं और संशोधित कर सकते हैं। कुशल कमांड रिकॉल के लिए एरो कीज़ का उपयोग करके नेविगेशन समर्थन एकीकृत किया।`,
        date: "अक्टूबर 2024 - नवंबर 2024",
      },
      {
        title: "रियल देव स्क्वाड",
        description: `अनुमतियों और भूमिकाओं के प्रबंधन के लिए एक सुपरयूज़र टॉगल सुविधा डिज़ाइन और कार्यान्वित की, जिससे 400+ उपयोगकर्ताओं को लाभ हुआ और साप्ताहिक रूप से 4000 मिनट से अधिक विकास समय की बचत हुई। एपीआई एकीकरण को सुव्यवस्थित करने के लिए एक RFC लिखा और आसान अपनाने के लिए प्रक्रिया का दस्तावेजीकरण किया। गुणवत्ता और टीम संरेखण सुनिश्चित करने के लिए कोड समीक्षा और डिज़ाइन चर्चाओं में सक्रिय रूप से योगदान करते हैं।`,
        date: "जून 2024 - वर्तमान",
      },
      {
        title: "एक्सपेरिमेंट लैब्स में फुलस्टैक डेवलपर इंटर्न",
        description: "एक्सपेरिमेंट लैब्स में छोटी इंटर्नशिप अवधि",
        date: "नवंबर 2024",
      },
      {
        title: "सोशल मीडिया डिजाइनर",
        description: `
             - उनके इंस्टाग्राम हैंडल के लिए सोशल मीडिया पोस्ट क्यूरेट/डिजाइन करना
             - आकर्षक रील्स बनाना।
             - उनकी आगामी पोस्ट और रील के लिए विचारों पर मंथन करना।`,
        date: "जनवरी 2023",
      },
    ],
    EducationTimelineItems: [
      {
        title: "अखिल भारतीय वरिष्ठ विद्यालय प्रमाणपत्र परीक्षा",
        description: "केन्द्रीय विद्यालय बेली रोड",
        date: "अप्रैल 2022",
      },
      {
        title: "बीकॉम ऑनर्स में स्नातक (जारी)",
        description: "श्री गुरु गोबिंद सिंह कॉलेज ऑफ कॉमर्स, दिल्ली विश्वविद्यालय",
        date: "नवंबर 2022 - जून 2025",
      },
    ],

    // NEW: Call to Action (Hindi)
    callToAction: `↗ क्या कोई प्रोजेक्ट आइडिया सोच रहे हैं? मुझसे संपर्क करें! देखते हैं कि क्या हम कुछ शानदार बना सकते हैं।`
  }
};

export default function Home() {

  const { language } = useLanguage()

  return (
    <main >
      <Card>
        <CardLink to={"https://x.com/shubhamdoesjs"}>
          <CardContent>
            <div className="flex flex-row items-center justify-center w-full gap-10 noise rounded-sm">
              <Image src={pfp} className="w-15 h-15 bg-mask noise" alt="Profile Picture" />
              <WaveAnimation />
            </div>
          </CardContent>
        </CardLink>
      </Card>
      <div className="p-5 my-10 w-full">
        <Heading1>
          {">"} About
        </Heading1>
        <Separator />
        <Paragraph className="tracking-wider my-4">
          {config[language].profileIntro}
          <br />
        </Paragraph>
        <ByLine className="my-4 ">
          <a className="font-black" href="mailto:shubhamxraj10@gmail.com">
            {config[language].callToAction}
          </a>
        </ByLine>
        <Heading1 className="my-10">
          {">"} Experience
        </Heading1>
        <Separator />
        <Timeline items={config[language].experienceTimelineItems} />
        <Heading1 className="my-10">
          {">"} Education
        </Heading1>
        <Separator />
        <Timeline items={config[language].EducationTimelineItems} />
      </div>
    </main>
  );
}
