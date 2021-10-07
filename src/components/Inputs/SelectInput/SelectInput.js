import React from 'react'
import { theme } from '../../../assets/styles/theme'
import InputWrapper from '../../../assets/styles/InputWrapper/InputWrapper'
import Label from '../../../assets/styles/Label/Label'
import Select from 'react-select'

const appStyles = theme

const customStyles = {
    container: provider => ({
        ...provider,
        marginBottom: '35px',
    }),
    
    control: (provided, state) => ({
        ...provided,
        borderRadius: '3px',
        padding: '6px 2px',
        boxShadow: 'none',
        transition: 'border 0.3s',
        border: state.isFocused ? `1px solid ${appStyles.colors.blue}`: `1px solid ${appStyles.colors.gray}`,
        cursor: 'pointer',
        fontSize: appStyles.sizes.desktop.default
    }),

    menu: provided => ({
        ...provided,
        marginTop: '0',
        borderRadius: '3px',
        padding: '0',
    }),

    menuList: provided => ({
        ...provided,
        padding: '0',
    }),

    option: provided => ({
        ...provided,
        padding: '12px 12px',
        cursor: 'pointer',
        fontSize: appStyles.sizes.desktop.default,
    })

}

const selectTheme = theme => ({
    ...theme,
    colors: {
        ...theme.colors,
        primary: appStyles.colors.blue,
        neutral30: appStyles.colors.gray,
    },
})

const SelectInput = ({ label, options, value, setValue }) => {

    const handleOnChange = event => {
        setValue(event)
    }

    return (
        <InputWrapper>
            <Label>{label}</Label>
            <Select 
                options={options}
                styles={customStyles}
                defaultValue={value}
                onChange={handleOnChange}
                theme={theme => selectTheme(theme)}
            />
        </InputWrapper>
    )
}

export default SelectInput