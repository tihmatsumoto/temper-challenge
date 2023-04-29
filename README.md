## Temper Challenge

------

**Part 1**

Acceptance Criteria Test can be found [here](acceptance-criteria-test.md)

**Part 2**

### Folder structure

```
├── .github                   # github actions files
│   └── workflows             # workflow for e2e tests 
├── cypress                    
│   ├── e2e                   # e2e tests
│   ├── fixtures              # data files
│   └── support               # commands
└── cypress.config.js         
├── README.md                 
├── acceptance-criteria-test.md                    
└── bugs.md
```
### Test organization

Some decisions were made considering what Cypress team considers best practices. I decided on not using Page Object Model because it is considered anti-pattern, although I understand there are good reasons for using it. So I'm using some commands, but also, not that many because there are few tests and not that much repetion. Most of the time, I tried using data-test to select an element, if not available, next one I will go to is ID and in last case, class.

For data, I decided to go with fixtures as it is a simple solution for the issue (and as it is a testing website). In the past, I used .env file for secrets, tokens and any other data that can be exposed. These are also easily added to github actions if needed.

Tests are separated by spec/domain/usage, and I decided against adding negative/edge cases just to keep things simple.

### CI/CD

I created a yaml workflow file that runs tests every push and whenever wanted with workflow_dispatch trigger. Test results can be seen [here](https://github.com/tihmatsumoto/temper-challenge/actions).

---

**Part 3**

Bug report can be found [here](bugs.md)
