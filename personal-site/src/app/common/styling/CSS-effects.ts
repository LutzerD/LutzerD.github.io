export class CSSEffect {
  constructor(
    public parentClass: string = '',
    public childClass: string = '',
    public duplicate: boolean = false
  ) {}
}
export const CSSEffects: { [groupName: string]: CSSEffect[] } = {
  Clickable: [],
  Hoverable: [
    new CSSEffect('twisty'),
    new CSSEffect('lineline'),
    new CSSEffect('p-switcheroo', 'switcheroo', true),
  ],
};
