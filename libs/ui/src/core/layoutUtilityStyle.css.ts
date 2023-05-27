import { defineProperties, createSprinkles } from '@vanilla-extract/sprinkles';
import { COLOR_PROPERTIES, SPACE_PROPERTIES } from '@oseek/ui';

const layoutProperties = defineProperties({
  properties: {
    display: ['none', 'flex', 'block', 'inline-block'],
    flexDirection: ['row', 'column'],
    alignItems: ['stretch', 'flex-start', 'flex-end', 'center'],
    justifyContent: ['flex-start', 'flex-end', 'center', 'space-between', 'space-around'],
    marginTop: SPACE_PROPERTIES,
    marginRight: SPACE_PROPERTIES,
    marginBottom: SPACE_PROPERTIES,
    marginLeft: SPACE_PROPERTIES,
    paddingTop: SPACE_PROPERTIES,
    paddingRight: SPACE_PROPERTIES,
    paddingBottom: SPACE_PROPERTIES,
    paddingLeft: SPACE_PROPERTIES,
  },
  shorthands: {
    margin: ['marginTop', 'marginRight', 'marginBottom', 'marginLeft'],
    marginX: ['marginLeft', 'marginRight'],
    marginY: ['marginTop', 'marginBottom'],
    padding: ['paddingTop', 'paddingRight', 'paddingBottom', 'paddingLeft'],
    paddingX: ['paddingLeft', 'paddingRight'],
    paddingY: ['paddingTop', 'paddingBottom'],
  }
});

export const layoutUtilityStyleCss = createSprinkles(layoutProperties);

export type LayoutUtilityStyle = Parameters<typeof layoutUtilityStyleCss>[0];
