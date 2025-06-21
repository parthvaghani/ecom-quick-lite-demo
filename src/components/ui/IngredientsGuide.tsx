"use client";

import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Leaf, Droplets } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const ingredientsData = [
  {
    gu: {
      name: "કેન બેરીઝ (Cranberries)",
      benefit:
        "લો પોટેશિયમ ઓછું અને વિટામીન ‘C’ વધારે હોવાથી કિડની ના રોગોમાં ફાયદાકારક છે.",
    },
    en: {
      name: "Cranberries",
      benefit:
        "Low in potassium and high in Vitamin C, making it beneficial for kidney diseases.",
    },
  },
  {
    gu: {
      name: "બ્લુ બેરીઝ (Blueberries)",
      benefit:
        "વિટામીન ‘C’ - ‘A’ હોય છે આર્યન વધારે હોય છે. અને કેલ્શિયમ પણ હોય છે. પાચન શક્તિ સુધારે છે. Full Of વિટામીન એન્ડ મિનરલ્સ. એન્ટીઓક્સીડન્ટ થી ભરપૂર.",
    },
    en: {
      name: "Blueberries",
      benefit:
        "Contains Vitamin C & Vitamin A, and is high in Iron and Calcium. It improves digestion and is full of vitamins, minerals, and antioxidants.",
    },
  },
  {
    gu: {
      name: "ચિયા સીડ (Chia Seeds)",
      benefit: "ફાઈબર, પ્રોટીન, મીનરલ્સ અને વિટામીન ‘B’ થી ભરપૂર.",
    },
    en: {
      name: "Chia Seeds",
      benefit: "Rich in Fiber, Protein, Minerals, and Vitamin B.",
    },
  },
  {
    gu: {
      name: "કિનોવા (Quinoa)",
      benefit: "કબજીયાત સારી કરે, કેન્સર જેવા રોગોમાં અસરકારક ફાયબર થી ભરપૂર.",
    },
    en: {
      name: "Quinoa",
      benefit:
        "Relieves constipation and is an effective fiber source for preventing diseases like cancer.",
    },
  },
  {
    gu: {
      name: "ખસખસ (Poppy Seeds)",
      benefit:
        "મીનરલ્સ મેગ્નેશિયમ થી ભરપૂર, સ્ટ્રેસ ઓછું કરવા માં મદદરૂપ આંતરડા મજબૂત બનાવે",
    },
    en: {
      name: "Poppy Seeds",
      benefit:
        "Rich in Minerals and Magnesium, helps reduce stress and strengthens the intestines.",
    },
  },
  {
    gu: {
      name: "કાળા તલ (Black Sesame Seeds)",
      benefit:
        "વાળ ખરતા બંધ થાય છે. ચહેરા પર પ્રાકૃતિક ચમક આવે છે. હેલ્થી સ્કીન",
    },
    en: {
      name: "Black Sesame Seeds",
      benefit: "Stops hair fall and brings a natural glow to the face.",
    },
  },
  {
    gu: {
      name: "પમ્પકીન સીડ (Pumpkin Seeds)",
      benefit: "સારી ઊંઘલાવવા માં મદદરૂપ થાય. મેનાપોઝ ની સ્થિતિમા મદદરૂપ",
    },
    en: {
      name: "Pumpkin Seeds",
      benefit: "Helps in getting good sleep and is helpful during menopause.",
    },
  },
  {
    gu: {
      name: "સુર્યમુખી (Sunflower Seeds)",
      benefit:
        "હદયરોગ અને ડાયાબીટીઝમા ફાયદાકારક, Weight Loss માટે, વિટામીન ‘E’ થી ભરપૂર.",
    },
    en: {
      name: "Sunflower Seeds",
      benefit:
        "Beneficial for heart disease and diabetes, aids in Weight Loss, and is rich in Vitamin E.",
    },
  },
  {
    gu: {
      name: "મગજતરી (Watermelon Seeds)",
      benefit:
        "ઈમ્પ્રુવ હાર્ટ હેલ્થ એન્ડ મેન ફર્ટિલિટી ઈમ્યુનીટી સીસ્ટમ વધારે વાળ માટે ફાયદાકારક",
    },
    en: {
      name: "Watermelon Seeds",
      benefit:
        "Improves heart health and men's fertility, enhances the immune system, and is beneficial for hair.",
    },
  },
  {
    gu: {
      name: "અળસી (Flax Seeds)",
      benefit:
        "Full Of મેગ્નેશિયમ (98%), 0% કોલેસ્ટ્રોલ, વિટામીન-B, Omega-3, Hair loss માં ફાયદો કરે. સ્કિનમા ફાયદાકારક. વેઈટ લોસ મા મદદરૂપ. કબજીયાત માટે.",
    },
    en: {
      name: "Flax Seeds",
      benefit:
        "Full of Magnesium (98%), 0% Cholesterol, Vitamin-B, and Omega-3. It helps with hair loss, skin health, Weight Loss, and constipation.",
    },
  },
  {
    gu: {
      name: "ચણોઠી પાન (Jequirity Leaves)",
      benefit:
        "પેટ સંબંધિત બધી બિમારી દુર કરે. મોઢા ના છાલા ની સમસ્યા દુર થાય સામાન્ય શર્દી, ખાંસી, તાવ ને સારો કરે.",
    },
    en: {
      name: "Jequirity Leaves",
      benefit:
        "Cures all stomach-related ailments, mouth ulcers, common cold, cough, and fever.",
    },
  },
  {
    gu: {
      name: "આલમન્ડ (Almonds)",
      benefit: "મેગ્નેશિયમ અને લો કેલેરી (વજન ઘટાડવા) મેમરી પાવર વધારવા માટે",
    },
    en: {
      name: "Almonds",
      benefit:
        "Rich in Magnesium and low in calories, which helps increase memory power and aids in weight loss.",
    },
  },
  {
    gu: { name: "કાજુ (Cashews)", benefit: "મેગ્નેશિયમ અને કેલ્શિયમ" },
    en: { name: "Cashews", benefit: "Rich in Magnesium and Calcium." },
  },
  {
    gu: {
      name: "અખરોટ (Walnuts)",
      benefit: "Full Of Omega-3 ફેટી એસિડ. હદય માટે બોડી ફેટ ઘટાડવા",
    },
    en: {
      name: "Walnuts",
      benefit:
        "Full of Omega-3 fatty acids, which are good for the heart and help reduce body fat.",
    },
  },
  {
    gu: {
      name: "અંજીર (Figs)",
      benefit: "ડાયજેસ્ટીવ સિસ્ટમ ઈમ્પ્રુવ કરે. Weight Loss માટે.",
    },
    en: {
      name: "Figs",
      benefit: "Improves the digestive system and aids in Weight Loss.",
    },
  },
  {
    gu: {
      name: "પિસ્તા (Pistachios)",
      benefit: "ફાયબરથી ભરપૂર, ભૂખ ઓછી લાગે.",
    },
    en: {
      name: "Pistachios",
      benefit: "Rich in fiber, which helps reduce appetite.",
    },
  },
];

const keywords = [
  "Vitamin C",
  "Vitamin A",
  "Vitamin B",
  "Vitamin E",
  "Omega-3",
  "Magnesium",
  "Potassium",
  "Iron",
  "Calcium",
  "Fiber",
  "Protein",
  "Minerals",
  "Antioxidant",
  "Cholesterol",
  "Weight Loss",
  "વિટામીન ‘C’",
  "વિટામીન ‘A’",
  "વિટામીન ‘B’",
  "વિટામીન ‘E’",
  "મેગ્નેશિયમ",
  "કોલેસ્ટ્રોલ",
  "Omega-3",
  "ફાઈબર",
  "પ્રોટીન",
  "મીનરલ્સ",
];
const regex = new RegExp(`(${keywords.join("|")})`, "gi");

export function IngredientsGuide() {
  const [language, setLanguage] = useState<"gu" | "en">("en");

  const renderBenefit = (text: string) => {
    const parts = text.split(regex);
    return parts.map((part, index) => {
      const isKeyword = keywords.some((keyword) =>
        new RegExp(`^${keyword}$`, "i").test(part)
      );
      if (isKeyword) {
        return (
          <Badge
            key={index}
            variant="outline"
            className="text-primary border-primary/50 mx-1 align-middle"
          >
            {part}
          </Badge>
        );
      }
      return <span key={index}>{part}</span>;
    });
  };

  return (
    <section className="py-20 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-foreground">
            {language === "gu"
              ? "પૌષ્ટિક તત્વો અને ફાયદાઓ"
              : "Nutrients & Benefits"}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            {language === "gu"
              ? "મુખવાસ માં ઉપયોગ માં લેવામાં આવતા વિવિધ પૌષ્ટિક તત્વો અને એના આરોગ્યલક્ષી ફાયદાઓ"
              : "Discover the various nutrients and health benefits of the ingredients used in our Mukhwas."}
          </p>
        </div>

        <div className="flex justify-center items-center gap-2 mb-8">
          <Button
            variant={language === "en" ? "default" : "outline"}
            onClick={() => setLanguage("en")}
            className="rounded-full"
          >
            English
          </Button>
          <Button
            variant={language === "gu" ? "default" : "outline"}
            onClick={() => setLanguage("gu")}
            className="rounded-full"
          >
            ગુજરાતી
          </Button>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {ingredientsData.map((item, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="border-b border-border/50"
            >
              <AccordionTrigger className="text-lg font-semibold hover:no-underline text-left">
                <span className="flex items-center">
                  <Leaf className="w-5 h-5 mr-3 text-primary" />
                  {item[language].name}
                </span>
              </AccordionTrigger>
              <AccordionContent className="pt-2 pb-4 text-base text-muted-foreground">
                <span className="flex items-start">
                  <Droplets className="w-4 h-4 mr-3 mt-1 text-primary/70 flex-shrink-0" />
                  <div className="leading-relaxed">
                    {renderBenefit(item[language].benefit)}
                  </div>
                </span>
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
