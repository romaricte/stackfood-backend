
export class ValueDto {
    label: string;
    optionPrice: number;
    stock_unlimited: boolean;
    stock: number;
    variantId: string;
}

export class VariantDto{
    name: string;
    type: string;
    min: string;
    max: string;
    required: boolean;
    values: ValueDto[];
}