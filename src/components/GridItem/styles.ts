import styled from "styled-components";

type ContainerProps = {
    showBackground: Boolean
}

export const Container = styled.div<ContainerProps>`
    background-color: ${porps => porps.showBackground ? '#1550ff' : '#e2e3e3'};
    height: 100px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;


`;
type iconProps = {
    opacity?: number;
}
export const Icon = styled.img<iconProps>`
    width: 40px;
    height: 40px;
    opacity: ${props => props.opacity ?? 1};
`;