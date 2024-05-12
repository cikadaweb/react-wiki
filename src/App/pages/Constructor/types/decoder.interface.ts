import IRuleChildren from './rule.interface';

export default interface IDecoderChildren extends IRuleChildren {
  children: IDecoderChildren[];
}
