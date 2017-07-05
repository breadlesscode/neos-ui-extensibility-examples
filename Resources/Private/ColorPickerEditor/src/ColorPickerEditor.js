import React, {PropTypes, PureComponent} from 'react';
import { SketchPicker } from 'react-color';

export default class ColorPickerEditor extends PureComponent {

    static propTypes = {
        value: PropTypes.string,
        commit: PropTypes.func.isRequired,
    };

    handleChangeColor = newColor => {
        this.props.commit(newColor.hex);
    };

    render() {
        return (<div>
            <SketchPicker color={this.props.value} onChange={this.handleChangeColor}/>
        </div>);
    }
}
