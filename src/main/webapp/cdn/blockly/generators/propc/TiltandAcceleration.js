/*

 This file contains support for the Tilt and Acceleration sensors

 Author: valetolpegin@gmail.com

 *Copyright 2014 Vale Tolpegin.
 *
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
'use strict';

if (!Blockly.Blocks)
    Blockly.Blocks = {};



Blockly.Blocks.MX2125_acceleration_xaxis = {
    init: function () {
        this.setColour(colorPalette.getColor('input'));
        this.appendDummyInput()
                .appendField("Memsic acceleration x-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINX");

        this.setNextStatement(false, null);
        this.setPreviousStatement(false, null);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks.MX2125_acceleration_yaxis = {
    init: function () {
        this.setColour(colorPalette.getColor('input'));
        this.appendDummyInput()
                .appendField("Memsic acceleration y-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINY");

        this.setNextStatement(false, null);
        this.setPreviousStatement(false, null);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks.MX2125_rotation = {
    init: function () {
        this.setColour(colorPalette.getColor('input'));
        this.appendDummyInput()
                .appendField("MX2125 rotation")
                .appendField("x-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINX")
                .appendField("y-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINY");

        this.setInputsInline(true);
        this.setNextStatement(false, null);
        this.setPreviousStatement(false, null);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks.MX2125_tilt_xaxis = {
    init: function () {
        this.setColour(colorPalette.getColor('input'));
        this.appendDummyInput()
                .appendField("Memsic tilt x-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINX");

        this.setNextStatement(false, null);
        this.setPreviousStatement(false, null);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks.MX2125_tilt_yaxis = {
    init: function () {
        this.setColour(colorPalette.getColor('input'));
        this.appendDummyInput()
                .appendField("Memsic tilt y-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINY");

        this.setNextStatement(false, null);
        this.setPreviousStatement(false, null);
        this.setOutput(true, 'Number');
    }
};

Blockly.Blocks.MMA7455_acceleration = {
    init: function () {
        this.setColour(colorPalette.getColor('input'));
        this.appendDummyInput()
                .appendField("Accelerometer x-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINX")
        this.appendDummyInput()
                .appendField("store x value in")
                .appendField(new Blockly.FieldVariable(Blockly.LANG_VARIABLES_GET_ITEM), 'X_VAR');
        this.appendDummyInput()
                .appendField("y-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINY")
        this.appendDummyInput()
                .appendField("store y value in")
                .appendField(new Blockly.FieldVariable(Blockly.LANG_VARIABLES_GET_ITEM), 'Y_VAR');
        this.appendDummyInput()
                .appendField("z-axis PIN")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "PINZ")
        this.appendDummyInput()
                .appendField("store z value in")
                .appendField(new Blockly.FieldVariable(Blockly.LANG_VARIABLES_GET_ITEM), 'Z_VAR');

        this.setInputsInline(false);
        this.setNextStatement(true, null);
        this.setPreviousStatement(true, null);
    },
    getVars: function () {
        return [this.getFieldValue('X_VAR'), this.getFieldValue('Y_VAR'), this.getFieldValue('Z_VAR')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('X_VAR'))) {
            this.setTitleValue(newName, 'X_VAR');
        } else if (Blockly.Names.equals(oldName, this.getFieldValue('Y_VAR'))) {
            this.setTitleValue(newName, 'Y_VAR');
        } else if (Blockly.Names.equals(oldName, this.getFieldValue('Z_VAR'))) {
            this.setTitleValue(newName, 'Z_VAR');
        }
    }
};

Blockly.Blocks.HMC5883L_init = {
    init: function () {
        this.setColour(colorPalette.getColor('input'));
        this.appendDummyInput()
                .appendField("Compass initialize SCL")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "SCL");
        this.appendDummyInput()
                .appendField("SDA")
                .appendField(new Blockly.FieldDropdown(profile.default.digital), "SDA");

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    }
};

Blockly.Blocks.HMC5883L_read = {
    init: function () {
        this.setColour(colorPalette.getColor('input'));
        this.appendDummyInput()
                .appendField("Compass store heading in")
                .appendField(new Blockly.FieldVariable(Blockly.LANG_VARIABLES_GET_ITEM), 'HEADING');

        this.setInputsInline(true);
        this.setPreviousStatement(true, null);
        this.setNextStatement(true, null);
    },
    getVars: function () {
        return [this.getFieldValue('HEADING')];
    },
    renameVar: function (oldName, newName) {
        if (Blockly.Names.equals(oldName, this.getFieldValue('HEADING'))) {
            this.setTitleValue(newName, 'HEADING');
        }
    }
};

Blockly.propc.MX2125_acceleration_xaxis = function () {
    var pin = this.getFieldValue('PINX');

    Blockly.propc.definitions_["include_mx2125"] = '#include "mx2125.h"';

    var code = 'mx_accel(' + pin + ')';
    return [code, Blockly.propc.ORDER_NONE];
};

Blockly.propc.MX2125_acceleration_yaxis = function () {
    Blockly.propc.definitions_["include_mx2125"] = '#include "mx2125.h"';

    var pin = this.getFieldValue('PINY');
    var code = 'mx_accel(' + pin + ')';

    return [code, Blockly.propc.ORDER_NONE];
};

Blockly.propc.MX2125_rotation = function () {
    var pinx = this.getFieldValue('PINX');
    var piny = this.getFieldValue('PINY');

    Blockly.propc.definitions_["include_mx2125"] = '#include "mx2125.h"';

    var code = 'mx_rotate(' + pinx + ', ' + piny + ')';
    return [code, Blockly.propc.ORDER_NONE];
};

Blockly.propc.MX2125_tilt_xaxis = function () {
    var pin = this.getFieldValue('PINX');

    Blockly.propc.definitions_["include_mx2125"] = '#include "mx2125.h"';

    var code = 'mx_tilt(' + pin + ')';
    return [code, Blockly.propc.ORDER_NONE];
};

Blockly.propc.MX2125_tilt_yaxis = function () {
    var pin = this.getFieldValue('PINY');

    Blockly.propc.definitions_["include_mx2125"] = '#include "mx2125.h"';

    var code = 'mx_tilt(' + pin + ')';
    return [code, Blockly.propc.ORDER_NONE];
};

Blockly.propc.MMA7455_acceleration = function () {
    var pinx = this.getFieldValue('PINX');
    var piny = this.getFieldValue('PINY');
    var pinz = this.getFieldValue('PINZ');

    var xstorage = Blockly.propc.variableDB_.getName(this.getFieldValue('X_VAR'), Blockly.Variables.NAME_TYPE);
    var ystorage = Blockly.propc.variableDB_.getName(this.getFieldValue('Y_VAR'), Blockly.Variables.NAME_TYPE);
    var zstorage = Blockly.propc.variableDB_.getName(this.getFieldValue('Z_VAR'), Blockly.Variables.NAME_TYPE);

    Blockly.propc.definitions_["include_mma7455"] = '#include "mma7455.h"';
    Blockly.propc.setups_["mma_7455"] = 'MMA7455_init(' + pinx + ', ' + piny + ', ' + pinz + ');\n';

    return 'MMA7455_getxyz10(&' + xstorage + ', &' + ystorage + ', &' + zstorage + ');\n';
};

Blockly.propc.HMC5883L_init = function () {
    var scl = this.getFieldValue("SCL");
    var sda = this.getFieldValue("SDA");

    Blockly.propc.definitions_["HMC5883L"] = '#include "compass3d.h"';
    Blockly.propc.setups_["HMC5883L"] = 'int compX, compY, compZ;\n\ti2c *bus = i2c_newbus(' + scl + ', ' + sda + ', 0);\n\tcompass_init(bus);';

    return '';
};

Blockly.propc.HMC5883L_read = function () {
    var storage = Blockly.propc.variableDB_.getName(this.getFieldValue('HEADING'), Blockly.Variables.NAME_TYPE);

    return 'compass_read(bus, &compX, &compY, &compZ);\n\tfloat fy = (float) compY;\n\tfloat fx = (float) compX;\n\tfloat heading = atan2(fy, fx) * 180.0/PI;\n\tif(heading < 0.0)\n\t\theading = (360.0 + heading);\n\t' + storage + ' = (int) heading;\n';
};
