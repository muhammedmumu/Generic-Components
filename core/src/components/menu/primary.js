import BaseMenu from "./base";
import { ContainedButton } from 'components/button';

export default function Menu(props){
    return <BaseMenu {...props} ButtonComponent={ContainedButton} />
}