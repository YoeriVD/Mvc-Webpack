/// <reference path="typings/tsd.d.ts" />

import * as angular from "angular";
import {MainController} from "./main/main.controller";


angular
  .module('sd', [])
  .controller("MainController", MainController);