(Original) 1. As a FreeFlexer, I am insured for a shift
Acceptance criteria
a) I can see the the status of my insurance
b) I can opt out of the insurance
c) I can see the type of insurance coverage that applies to my shift
d) I can see a confirmation that I’m insured for the shift I’m applying to, in the shift
overview page

(Improved) 1. As a FreeFlexer, I am insured for a shift
a) Added better description for first criteria, as I assume status will always be 'insured' for accident and liability as it is automatically

```
Given I'm a FreeFlexer with less than 10 shifts,
When I go to my shift page,
Then I see that I'm an insured against accident and liability
```

b) It is not specify in the context part, but I assume that you can't opt out of the insurance, so this acceptance criteria can be removed.
