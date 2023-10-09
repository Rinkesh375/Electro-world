import React from 'react';
import { Checkbox, Stack } from '@chakra-ui/react';

const LaptopCheckBoxFilter = ({ brandFilterHandler, brand }) => {
    return (
        <Stack>
            <Checkbox value="Hp_Laptop" isChecked={brand.includes("Hp_Laptop")} onChange={brandFilterHandler}>Hp Laptop</Checkbox>
            <Checkbox value="Dell_Laptop" isChecked={brand.includes("Dell_Laptop")} onChange={brandFilterHandler}>Dell Laptop</Checkbox>
            <Checkbox value="Asus_Laptop" isChecked={brand.includes("Asus_Laptop")} onChange={brandFilterHandler}>Asus Laptop</Checkbox>
            <Checkbox value="Axl_Laptop" isChecked={brand.includes("Axl_Laptop")} onChange={brandFilterHandler}>Axl Laptop</Checkbox>
            <Checkbox value="Lenovo_Laptop" isChecked={brand.includes("Lenovo_Laptop")} onChange={brandFilterHandler}>Lenovo Laptop</Checkbox>
            <Checkbox value="Apple_Laptop" isChecked={brand.includes("Apple_Laptop")} onChange={brandFilterHandler}>Apple Laptop</Checkbox>

        </Stack>
    );
}

export default LaptopCheckBoxFilter;