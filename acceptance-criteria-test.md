(Improved)

**As a FreeFlexer, I am insured for a shift**

a) Added better description for first criteria, as I assume status will always be 'insured' for accident and liability as it is automatically set for any shift. Same goes from anyone with more than 10 shifts, automatically given all 4 insurances.

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer with 1 shift|When I go to my shift overview page|Then I see that I'm an insured against accident and liability|
|Given I'm a FreeFlexer with 10 shifts|When I go to my shift overview page|Then I see that I'm an insured against accident, liability, sickness AND disability|

b) It is not specify in the context part, but I assume that you can't (or that a user won't want to) opt out of the insurance, still keeping it because it might be my lack of understanding on the business.

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer|When I go to my shift overview page|Then I can opt out of an insurance|
|Given I'm a FreeFlexer|When I go to my shift overview page|Then I can opt out of more than one insurance|
|Given I'm a FreeFlexer|When I go to my shift overview page|Then I can opt out of all insurances|

c) Merged c) and d) together, as it feels like that both validate the same aspect of the acceptance criteria (type of insurance and whether it is available)

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer|When I go to my shift overview page|Then I can see the confirmation and type of insurance coverage that applies to my shift|

-----

**As a FreeFlexer, I am automatically insured in case of sickness and disability**

a) Considering the rules that sickness and disability is only given after more than 10 shifts, this one seems to be lacking information. It could go either way:

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer with less than 10 shifts|When I go to my shift overview page|Then I see that I'm an insured against accident and liability|
|Given I'm a FreeFlexer with more than 10 shifts|When I go to my shift overview page|Then I see that I'm an insured against accident, liability, sickness AND disability|

b) Same here. Confirmation for insurance will be seen, but only for accident and liability. In case of less than 10 shifts, it won't cover sickness and disability. Acceptance criteria for c) is also described below:

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer with less than 10 shifts|When I go to my shift overview page|Then I don't see confirmation for sickness and disability insurance|

----

**As a FreeFlexer, I can submit an insurance claim**

a) No issue, just formatted as Given/When/Then table.

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer|When I go to my insurances page|Then I see an option to submit a claim|

b) No issue, just formatted as Given/When/Then table.

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer with at least one worked shift|When I go to my insurances page|Then I can see the submit claim button|

c) Would be interesting knowing which insurance and provider as it may differ for each insurance type, I assume. But I added a generic specification in Given/When/Then format.

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer with at least one worked shift|When I submit a claim|Then I'm redirected to the insurance provider website|

d) For this one, it would be more precise knowing what sort of confirmation (an email? a popup in the website? a confirmation document?). Also the confirmation is provided by insurance provider or temper? Might require more information from an outsider perspective.

|GIVEN|WHEN|THEN|
|-----|----|----|
|Given I'm a FreeFlexer with at least one worked shift|When I submit a claim|Then I get a confirmation|




