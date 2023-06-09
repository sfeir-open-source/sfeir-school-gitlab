import { SfeirThemeInitializer } from '../web_modules/sfeir-school-theme/sfeir-school-theme.mjs';

// One method per module
function schoolSlides() {
  return ['00-school/00-TITLE.md', '00-school/speaker-jef.md'];
}

function introSlides() {
  return ['intro/00-TITLE.md'];
}

function modulesSlides() {
  return ['modules/module-5.md', 'modules/module-6.md', 'modules/module-7.md'];
}

function formation() {
  return [
    //
    ...schoolSlides(), //
    ...introSlides(), //
    ...modulesSlides(), //
  ].map((slidePath) => {
    return { path: slidePath };
  });
}

SfeirThemeInitializer.init(formation);
