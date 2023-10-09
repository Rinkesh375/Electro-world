import React from 'react';
import { Checkbox, Stack } from '@chakra-ui/react';

const TvCheckBoxFilter = ({ brandFilterHandler, brand }) => {
    return (
        <Stack>
            <Checkbox value="Mi_Television" isChecked={brand.includes("Mi_Television")} onChange={brandFilterHandler}>Mi Television</Checkbox>
            <Checkbox value="Oneplus_Television" isChecked={brand.includes("Oneplus_Television")} onChange={brandFilterHandler}>Oneplus Television</Checkbox>
            <Checkbox value="Samsung_Television" isChecked={brand.includes("Samsung_Television")} onChange={brandFilterHandler}>Samsung Television</Checkbox>
            <Checkbox value="Hisense_Television" isChecked={brand.includes("Hisense_Television")} onChange={brandFilterHandler}>Hisense Television</Checkbox>
            <Checkbox value="Redmi_Television" isChecked={brand.includes("Redmi_Television")} onChange={brandFilterHandler}>Redmi Television</Checkbox>
            <Checkbox value="Realme_Television" isChecked={brand.includes("Realme_Television")} onChange={brandFilterHandler}>Realme Television</Checkbox>
            <Checkbox value="BPL_Television" isChecked={brand.includes("BPL_Television")} onChange={brandFilterHandler}>BPL Television</Checkbox>
            <Checkbox value="Sansui_Television" isChecked={brand.includes("Sansui_Television")} onChange={brandFilterHandler}>Sansui Television</Checkbox>
            <Checkbox value="TCL_Television" isChecked={brand.includes("TCL_Television")} onChange={brandFilterHandler}>TCL Television</Checkbox>
            <Checkbox value="Sony_Television" isChecked={brand.includes("Sony_Television")} onChange={brandFilterHandler}>Sony Television</Checkbox>
            <Checkbox value="LG_Television" isChecked={brand.includes("LG_Television")} onChange={brandFilterHandler}>LG Television</Checkbox>

        </Stack>
    );
}

export default TvCheckBoxFilter;