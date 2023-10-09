import React from 'react';
import { Checkbox,Stack } from '@chakra-ui/react';

const AcCheckBoxFilter = ({brandFilterHandler,brand}) => {
  return (
    <Stack>
                    <Checkbox value="Daikin_ac" isChecked={brand.includes("Daikin_ac")} onChange={brandFilterHandler}>Daikin AC</Checkbox>
                    <Checkbox value="Sansui_ac" isChecked={brand.includes("Sansui_ac")} onChange={brandFilterHandler}>Sansui AC</Checkbox>
                    <Checkbox value="LG_ac" isChecked={brand.includes("LG_ac")} onChange={brandFilterHandler}>LG AC</Checkbox>
                    <Checkbox value="Lloyd_ac" isChecked={brand.includes("Lloyd_ac")} onChange={brandFilterHandler}>Lloyd AC</Checkbox>
                    <Checkbox value="Blue Star_ac" isChecked={brand.includes("Blue Star_ac")} onChange={brandFilterHandler}>Blue Star AC</Checkbox>
                    <Checkbox value="Voltas_ac" isChecked={brand.includes("Voltas_ac")} onChange={brandFilterHandler}>Voltas AC</Checkbox>
                    <Checkbox value="Hisense_ac" isChecked={brand.includes("Hisense_ac")} onChange={brandFilterHandler}>Hisense AC</Checkbox>
                    
                </Stack>
  );
}

export default AcCheckBoxFilter;
