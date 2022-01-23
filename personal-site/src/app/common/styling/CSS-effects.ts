export class CSSEffect {
  constructor(
    public parentClass: string = '',
    public childClass: string = '',
    public duplicates: number = 0,
  ) {}
}
export const CSSEffects: { [groupName: string]: CSSEffect[] } = {
  Clickable: [],
  Hoverable: [
    new CSSEffect('twisty'),
    new CSSEffect('lineline'),
    new CSSEffect('p-switcheroo', 'switcheroo', 1),
  ],
};
