export default interface IRuleChildren {
  nodeName: string;
  value: string;
  children: IRuleChildren[];
  attributes: Map<string, string>;
  id: string;
}


