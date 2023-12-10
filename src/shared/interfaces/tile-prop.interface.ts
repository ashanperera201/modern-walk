export interface ITileProp {
    id: number;
    height: string;
    width: string;
    title?: string;
    backgroundColor?: string;
    borderRadius?: 'rounded-sm' | 'rounded' | 'rounded-md' | 'rounded-lg' | 'rounded-xl' | 'rounded-2xl' | 'rounded-3xl' | 'rounded-full';
    fontColor?: string;
    fontSize?: string;
    fontWeight?: 'font-thin' | 'font-extralight' | 'font-normal' | 'font-medium' | 'font-semibold' | 'font-bold' | 'font-extrabold' | 'font-black';
    onClick?(): void;
}