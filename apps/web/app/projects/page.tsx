"use client"
import { Heading1 } from "../components/Heading";
import { ProjectCardList } from "../components/Projects";
import { Separator } from "../components/Separator";
import { useLanguage } from "../context/LanguageContext";



export default function Projects() {

    const { language } = useLanguage()

    const config = {
        en: {
            projects: [{
                title: "calEvent",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                githubUrl: "https://github.com/shubhdevelop/CalEvents",
                deployment: "https://cal-events.vercel.app/",
                technologyUsed: ["firebaseAuth", "react", "tailwind", "nodejs", "express", "mongodb"],
                byLine: "crazy"
            }, {
                title: "Complyance",
                content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
                githubUrl: "https://github.com/shubhdevelop/complyance",
                deployment: "https://complyance-tan.vercel.app/",
                technologyUsed: ["firebaseAuth", "react", "tailwind", "nodejs", "express", "mongodb", "RBAC", "shadCn"],
                byLine: "crazy"
            },
            {
                title: "Dice Db",
                content: `Persistent Command History: Implemented a terminal feature that saves command history across sessions (until the tab is closed), allowing users to recall, reuse, and modify previous commands efficiently. Added navigation support through the command history via arrow keys.
              Real- Time Command Usage Hints: Developed an inline hints feature that provides users with real - time syntax guidance as they type commands, reducing the need for external documentation and improving productivity.`,
                githubUrl: "https://github.com/shubhdevelop/complyance", // Note: This seems to be the Complyance repo URL, might need correction for DiceDB
                deployment: "https://github.com/dicedb/dice", // Note: This seems to be the DiceDB repo URL, not a deployment URL
                technologyUsed: ["nextJs", "turboRepo", "tailwind",],
                byLine: "Open Source"
            }],
        },
        hi: {
            projects: [{
                title: "कैलइवेंट", // Translated
                content: "लोरम इप्सम केवल प्रिंटिंग और टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरम इप्सम 1500 के दशक से उद्योग का मानक डमी टेक्स्ट रहा है, जब एक अज्ञात प्रिंटर ने टाइप की एक गैली ली और इसे एक टाइप नमूना पुस्तक बनाने के लिए स्क्रैम्बल किया। यह न केवल पाँच शताब्दियों तक जीवित रहा है, बल्कि इलेक्ट्रॉनिक टाइपसेटिंग में छलांग भी लगाई है, अनिवार्य रूप से अपरिवर्तित रहा है। इसे 1960 के दशक में लोरम इप्सम पैसेज वाली लेट्रासेट शीट जारी होने के साथ लोकप्रिय बनाया गया था, और हाल ही में एल्डस पेजमेकर जैसे डेस्कटॉप पब्लिशिंग सॉफ्टवेयर के साथ जिसमें लोरम इप्सम के संस्करण शामिल हैं।", // Translated Placeholder
                githubUrl: "https://github.com/shubhdevelop/CalEvents", // Kept same
                deployment: "https://cal-events.vercel.app/", // Kept same
                technologyUsed: ["firebaseAuth", "react", "tailwind", "nodejs", "express", "mongodb"], // Kept in English
                byLine: "क्रेजी" // Translated (Transliteration)
            }, {
                title: "कंप्लायंस", // Translated (Transliteration)
                content: "लोरम इप्सम केवल प्रिंटिंग और टाइपसेटिंग उद्योग का डमी टेक्स्ट है। लोरम इप्सम 1500 के दशक से उद्योग का मानक डमी टेक्स्ट रहा है, जब एक अज्ञात प्रिंटर ने टाइप की एक गैली ली और इसे एक टाइप नमूना पुस्तक बनाने के लिए स्क्रैम्बल किया। यह न केवल पाँच शताब्दियों तक जीवित रहा है, बल्कि इलेक्ट्रॉनिक टाइपसेटिंग में छलांग भी लगाई है, अनिवार्य रूप से अपरिवर्तित रहा है। इसे 1960 के दशक में लोरम इप्सम पैसेज वाली लेट्रासेट शीट जारी होने के साथ लोकप्रिय बनाया गया था, और हाल ही में एल्डस पेजमेकर जैसे डेस्कटॉप पब्लिशिंग सॉफ्टवेयर के साथ जिसमें लोरम इप्सम के संस्करण शामिल हैं।", // Translated Placeholder
                githubUrl: "https://github.com/shubhdevelop/complyance", // Kept same
                deployment: "https://complyance-tan.vercel.app/", // Kept same
                technologyUsed: ["firebaseAuth", "react", "tailwind", "nodejs", "express", "mongodb", "RBAC", "shadCn"], // Kept in English
                byLine: "क्रेजी" // Translated (Transliteration)
            },
            {
                title: "डाइस डीबी", // Translated (Transliteration)
                content: `परसिस्टेंट कमांड हिस्ट्री: एक टर्मिनल सुविधा लागू की जो सत्रों के बीच कमांड इतिहास को सहेजती है (जब तक टैब बंद न हो जाए), जिससे उपयोगकर्ता पिछले कमांड को कुशलतापूर्वक याद कर सकते हैं, पुन: उपयोग कर सकते हैं और संशोधित कर सकते हैं। एरो कीज़ के माध्यम से कमांड इतिहास में नेविगेशन समर्थन जोड़ा गया।
              रीयल-टाइम कमांड उपयोग संकेत: एक इनलाइन संकेत सुविधा विकसित की जो उपयोगकर्ताओं को कमांड टाइप करते समय रीयल-टाइम सिंटैक्स मार्गदर्शन प्रदान करती है, जिससे बाहरी दस्तावेज़ीकरण की आवश्यकता कम हो जाती है और उत्पादकता में सुधार होता है।`, // Translated
                githubUrl: "https://github.com/shubhdevelop/complyance", // Kept same (Note: URL might need correction)
                deployment: "https://github.com/dicedb/dice", // Kept same (Note: URL might need correction)
                technologyUsed: ["nextJs", "turboRepo", "tailwind",], // Kept in English
                byLine: "ओपन सोर्स" // Translated (Transliteration)
            }],
        }
    };

    return (
        <main className="w-full p-4">
            <Heading1>
                {"> Projects"}
            </Heading1>
            <Separator />
            <ProjectCardList projects={config[language].projects} />
        </main>
    );
}

