/// <reference path="typings/tsd.d.ts" />

import * as angular from "angular";
import {MainController} from "./main/main.controller";


declare function require(string): string;

require("../Content/bootstrap.css");

angular
  .module('sd', [])
  .controller("MainController", MainController);