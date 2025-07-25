**Note**: Delete the description statements, complete each step. **None are optional**, but can be justified as to why they cannot be completed as written. Provide known gaps to testing that may raise the risk of merging to production.

<!--
Note: GitHub Copilot will be added as a PR reviewer automatically. Please pay attention to its suggestions, but use your judgement when deciding whether to incorporate them.
-->

## Summary

- _(Summarize the changes that have been made to the platform)_
- _(If bug, how to reproduce)_
- _(What is the solution, why is this the solution)_
- _(Which team do you work for, does your team own the maintenance of this component?)_
- _(If using a flipper, what is the end date of the flipper being required/success criteria being targeted)_

### Generated summary
(Select this text, hit the Copilot button, and select "Generate".)

## Related issue(s)

- _Link to ticket created in va.gov-team repo_
department-of-veterans-affairs/va.gov-team#0000
- _Link to previous change of the code/bug (if applicable)_
department-of-veterans-affairs/vets-website#0000
- _Link to epic if not included in ticket_
department-of-veterans-affairs/va.gov-team#0000

## Are you removing or changing a registry.json `entryName` in this PR?
- [ ] No, I'm not changing any `entryName`s (skip to Summary and delete the rest of this section)
- [ ] Yes, I'm removing or changing an `entryName`

If you are:
1. **Deleting an entryName**: First search [vets-website](https://github.com/department-of-veterans-affairs/vets-website/) for references to this `entryName` that are _not_ in the app folder (particularly in `src/applications/static-pages/static-pages-entry.js` and `src/platform/forms/constants.js`) and merge a PR that removes those references, if any.
   - _Add the link to your merged vets-website PR here_

2. **Changing an entryName**: First search [vets-website](https://github.com/department-of-veterans-affairs/vets-website/) for references to this `entryName` that are _not_ in the app folder (particularly in `src/applications/static-pages/static-pages-entry.js` and `src/platform/forms/constants.js`) and merge a PR that updates those references, if any.
   - _Add the link to your merged vets-website PR here_
  
_**If you do not do this, other applications will break!**_

## Testing done

- _Describe what the old behavior was prior to the change_
- _Describe the steps required to verify your changes are working as expected_
- _Describe the tests completed and the results_
- _Exclusively stating 'Specs and automated tests passing' is NOT acceptable as appropriate testing
- _Optionally, provide a link to your [test plan](https://depo-platform-documentation.scrollhelp.site/developer-docs/create-a-test-plan-in-testrail) and [test execution records](https://depo-platform-documentation.scrollhelp.site/developer-docs/execute-tests-in-testrail)_

## Screenshots

_Note: This field is mandatory for UI changes (non-component work should NOT have screenshots)._

|         | Before | After |
| ------- | ------ | ----- |
| Mobile  |        |       |
| Desktop |        |       |

## What areas of the site does it impact?

*(Describe what parts of the site are impacted **if** code touched other areas)*

## Acceptance criteria

### Quality Assurance & Testing

- [ ] I fixed|updated|added unit tests and integration tests for each feature (if applicable).
- [ ] No sensitive information (i.e. PII/credentials/internal URLs/etc.) is captured in logging, hardcoded, or specs
- [ ] Linting warnings have been addressed
- [ ] Documentation has been updated ([link to documentation](#) \*if necessary)
- [ ] Screenshot of the developed feature is added
- [ ] [Accessibility testing](https://depo-platform-documentation.scrollhelp.site/developer-docs/wcag-2-1-success-criteria-and-foundational-testing) has been performed

### Error Handling

- [ ] Browser console contains no warnings or errors.
- [ ] Events are being sent to the appropriate logging solution
- [ ] Feature/bug has a monitor built into Datadog or Grafana (if applicable)

### Authentication

- [ ] Did you login to a local build and verify all authenticated routes work as expected with a test user

## Requested Feedback

(OPTIONAL) _What should the reviewers know in addition to the above. Is there anything specific you wish the reviewer to assist with. Do you have any concerns with this PR, why?_
