import styled from 'styled-components';
import TabButton from 'components/TabButton';


const Image = styled.img`
  position: relative;
  width: 25px;
  margin-right: 25px;
`;

const Name = styled.h5`
  font-size: 14px;
  color: ${({ theme }) => theme.colors.secondary};
  &.warning {
    width: 100%;
    padding: 12px 15px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.warningLight};
  }
  span {
    color: ${({ theme }) => theme.colors.primary};
    padding: 0 6px;
  }
`;

const Cases = styled(Name)`
  color: ${({ theme }) => theme.colors.warning};
`;

const List = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 7px 15px;
  border-radius: 30px;
  transition: all 0.3s ease;
  cursor: pointer;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryLight};
  }
  &.active {
    background-color: ${({ theme }) => theme.colors.successLight};
  }
`;

const ListWrapper = styled.ul`
  positions: relative;
  padding: 0;
  margin: 0;
`;

const DropdownContent = styled.div`
  position: relative;
  border-radius: 15px;
  width: 400px;
  max-height: 450px;
  overflow-x: scroll;
  padding: 20px;
  padding-top: 0;
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 15px 3px rgba(189, 189, 189, 0.1);
`;

const Container = styled.div`
  position: absolute;
  padding-top: 15px;
  transform: translateY(30px);
  left: 0;
  width: 400px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s ease;
  z-index: 5;
  &.active {
    opacity: 1;
    visibility: visible;
    transform: translateY(0px);
  }
`;

const InputWrapper = styled.div`
  position: sticky;
  top: 0;
  padding: 20px 0 15px;
  background: ${({ theme }) => theme.colors.white};
  z-index: 2;
`;

const Input = styled.input`
  width: 100%;
  height: 40px;
  border-radius: 30px;
  padding: 5px 20px;
  border: 2px solid ${({ theme }) => theme.colors.successLight};
  box-sizing: border-box;
  transition: all 0.3s ease;
  background: ${({ theme }) => theme.colors.white};
  &:focus {
    border: 2px solid ${({ theme }) => theme.colors.success};
  }
`;

const Main = styled.div`
  position: relative;
`;

const RemoveButton = styled.button`
  width: 30px;
  height: 30px;
  border-radius: 50px;
  border: 2px solid ${({ theme }) => theme.colors.dangerLight};
  font-size: 14px;
  cursor: pointer;
  transition: all 0.3s ease-in;
  transform: ${({ country }) => (country !== '' ? `Scale(1)` : `Scale(0)`)};

  &:hover {
    border: 2px solid ${({ theme }) => theme.colors.danger};
  }
`;

const Button = styled(TabButton)`
  border: 2px solid
    ${({ theme, active }) =>
      active ? theme.colors.primary : theme.colors.grey};
  color: ${({ theme, active }) =>
    active ? theme.colors.primary : theme.colors.grey};
  background: ${({ theme, active }) =>
    active ? theme.colors.white : 'transparent'};
  &.active {
    border: 2px solid ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.primary};
    background: ${({ theme }) => theme.colors.white};
  }
`;
export {
  Image,
  Name,
  Cases,
  List,
  ListWrapper,
  DropdownContent,
  Container,
  InputWrapper,
  Input,
  Main,
  RemoveButton,
  Button,
};
