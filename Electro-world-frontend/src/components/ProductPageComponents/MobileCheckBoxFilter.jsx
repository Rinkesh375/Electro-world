import React from 'react';
import { Checkbox,Stack } from '@chakra-ui/react';

const MobileCheckBoxFilter = ({brandFilterHandler,brand}) => {
  return (
    <Stack>
                    <Checkbox value="Tecno_Mobile" isChecked={brand.includes("Tecno_Mobile")} onChange={brandFilterHandler}>Tecno</Checkbox>
                    <Checkbox value="Redmi_Mobile" isChecked={brand.includes("Redmi_Mobile")} onChange={brandFilterHandler}>Redmi</Checkbox>
                    <Checkbox value="Vivo_Mobile" isChecked={brand.includes("Vivo_Mobile")} onChange={brandFilterHandler}>Vivo</Checkbox>
                    <Checkbox value="Apple_Mobile" isChecked={brand.includes("Apple_Mobile")} onChange={brandFilterHandler}>Apple</Checkbox>
                    <Checkbox value="Oppo_Mobile" isChecked={brand.includes("Oppo_Mobile")} onChange={brandFilterHandler}>Oppo</Checkbox>
                    <Checkbox value="Itel_Mobile" isChecked={brand.includes("Itel_Mobile")} onChange={brandFilterHandler}>Itel</Checkbox>
                    <Checkbox value="OnePlus_Mobile" isChecked={brand.includes("OnePlus_Mobile")} onChange={brandFilterHandler}>OnePlus</Checkbox>
                    <Checkbox value="Moto-g_Mobile" isChecked={brand.includes("Moto-g_Mobile")} onChange={brandFilterHandler}>Moto-G</Checkbox>
                </Stack>
  );
}

export default MobileCheckBoxFilter;
