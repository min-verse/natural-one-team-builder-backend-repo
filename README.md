### Natural One

Natural One is a table top role-playing game (TTRPG) party and member tracker programmed in TypeScript and Ruby with Sinatra.

TTRPGs are incredibly fun, but it can be a huge hassle to keep track of your adventuring parties and the members of them. Don't feel as unlucky as you rolling a natural one trying to keep on top of your groups; use Natural One instead!

Natural One allows the user to create, view, edit and delete their parties for their TTRPG and add and view the members that belong to those parties.

---
## Side Bar:
The parties and their descriptors are displayed on the left sidebar of the screen. On each party, the user can click the following:

- 'Full Details' displays the full details of the party and the members that belong to that party in main portion of the screen.

- 'Edit' opens a new box that shows all of the details of the party and allows the user to edit any of the individual details. Any changes are saved in the persistent database and reflected in the website.

- 'Delete' will permanently delete the party from the database.

---

## Navbar:
In the top left of the screen, the user can select the following:

- 'Make a New Party' will open a new route where the user can create a new party and provide its details. Once the party details are provided, a form is shown where members can be created and added to the party. 
    - Clicking 'Add Member' will submit the details for the first member and open another member submission form to potentially be filled in.
    - When all members are added to party, the 'Done Editing' button will submit the new party and its members to the database.
    - Please note that a new party or member with a blank text box (nil value) will not be added to the database and you must provide values, by design
- 'Edit Parties' is an additional method to edit or delete the party details.

---

Thanks for downloading Natural One. We can't help with your dice rolls, but we can help you stay organized. Good luck on your adventures!

Created by Min Tu and Logan Lampton
