import styled from 'styled-components';

export const Form = styled.form`
    width: 450px;
    display: flex;
    flex-direction: column;
    gap: 22px;
`;

export const FormInput = styled.input`
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    padding: 25px 89px;
    border: none;
    outline: none;
    background: #21A0E8;
    color: #fff;
    border-radius: 20px;
`;

export const FormButton = styled.button`
    border: none;
    outline: none;
    background: #4bdc46;
    border-radius: 20px;
    font-size: 24px;
    font-weight: 600;
    line-height: 24px;
    padding: 16px 189px;
    cursor: pointer;
`;