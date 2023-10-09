import React from 'react';
import { Checkbox, Stack } from '@chakra-ui/react';

const EarphoneCheckBoxFilter = ({ brandFilterHandler, brand }) => {
    return (
        <Stack>
            <Checkbox value="Oneplus_earphone" isChecked={brand.includes("Oneplus_earphone")} onChange={brandFilterHandler}>Oneplus Earphone</Checkbox>
            <Checkbox value="Apple_earphone" isChecked={brand.includes("Apple_earphone")} onChange={brandFilterHandler}>Apple Earphone</Checkbox>
            <Checkbox value="Boat_earphone" isChecked={brand.includes("Boat_earphone")} onChange={brandFilterHandler}>Boat Earphone</Checkbox>
            <Checkbox value="Noise_earphone" isChecked={brand.includes("Noise_earphone")} onChange={brandFilterHandler}>Noise Earphone</Checkbox>
            <Checkbox value="Hammer_earphone" isChecked={brand.includes("Hammer_earphone")} onChange={brandFilterHandler}>Hammer Earphone</Checkbox>
            <Checkbox value="Ptron_earphone" isChecked={brand.includes("Ptron_earphone")} onChange={brandFilterHandler}>Ptron Earphone</Checkbox>
            <Checkbox value="Zebronics_earphone" isChecked={brand.includes("Zebronics_earphone")} onChange={brandFilterHandler}>Zebronics Earphone</Checkbox>
            <Checkbox value="JBL_earphone" isChecked={brand.includes("JBL_earphone")} onChange={brandFilterHandler}>JBL Earphone</Checkbox>
        </Stack>
    );
}

export default EarphoneCheckBoxFilter;