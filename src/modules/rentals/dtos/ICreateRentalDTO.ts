interface ICreateRentalDTO {
    id?: string;
    car_id: string;
    user_id: string;
    end_date?: Date;
    total?: number;
    expected_return_date: Date;
}

export { ICreateRentalDTO };
