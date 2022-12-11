import Airtable from "airtable";
import {
  AnimalTok,
  BeautyTok,
  CleanTok,
  DareTok,
  KidTok,
  QuackTok,
  SadTok,
} from "../assets";

//   this function will return the icons of toks based upon their type, you can add as many icons here as you want

export const getIcon = (type) => {
  const icons = {
    clean_tok: CleanTok,
    dare_tok: DareTok,
    sad_tok: SadTok,
    quack_tok: QuackTok,
    animal_tok: AnimalTok,
    beauty_tok: BeautyTok,
    kid_tok: KidTok,
  };

  return icons[type];
};

//   this function will return the title of toks based upon their type, you can add as many titles here as you want

export const getTitle = (type) => {
  const titles = {
    clean_tok: "Clean Tok",
    dare_tok: "Dare Tok",
    sad_tok: "Sad Tok",
    quack_tok: "Quack Tok",
    animal_tok: "Animal Tok",
    beauty_tok: "Beauty Tok",
    kid_tok: "Kid Tok",
  };

  return titles[type];
};

//   this function will return the description of toks, you can add as many toks and description as you want

export const getDesc = (type) => {
  const desc = {
    clean_tok:
      "Very tidy and is obsessed with cleaning hacks. Often popular with parents.",
    dare_tok:
      "Gets people to do dangerous daring challenges that can harm themselves and others          ",
    sad_tok:
      "Helps deals with trauma. Sometimes leads to videos hinting self harm.",
    quack_tok:
      "Tends to surface controversial health advice from non-experts such as DIY mole removal ",
    animal_tok:
      "Loves anything with furry and cute. Maybe the one thing that all humans like.",
    beauty_tok:
      "Endlessly nudges people to buy beauty products such as eyeshadow palettes. Popular with ladies.",
    kid_tok:
      "Restricted mode for kids under 13. Most parents let kids use it under this mode to shut them up.",
  };

  return desc[type];
};

//array shuffling logic

export const shuffle = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};

//fetch data from airtble

export const fetchData = (type, maxRecords, setData, data) => {
  var base = new Airtable({ apiKey: "keynELsZmAFX3e52w" }).base(
    "appQx41NONtobLemr"
  );

  base(type)
    .select({
      // Selecting the first 3 records in Grid view:
      maxRecords,
      view: "Grid view",
    })
    .eachPage(
      function page(records) {

        const newData = records.slice(Math.max(records.length - 5, 0));

        setData([...data, ...shuffle(newData)]);
      },
      function done(err) {
        if (err) {
          console.error(err);
          return;
        }
      }
    );
};
