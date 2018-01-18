package com.girault.thomas.ezcomptes.cucumber.stepdefs;

import com.girault.thomas.ezcomptes.EzcomptesFrontendApp;

import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.ResultActions;

import org.springframework.boot.test.context.SpringBootTest;

@WebAppConfiguration
@SpringBootTest
@ContextConfiguration(classes = EzcomptesFrontendApp.class)
public abstract class StepDefs {

    protected ResultActions actions;

}
