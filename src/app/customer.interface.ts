export interface Customer {
    name: string; // required field with minimum 5 characters
    xaxis: Address[]; // user can have one or more addresses
}

export interface Address {
    items: string;  // required field
    
}