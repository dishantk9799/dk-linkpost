# Feedback

## Code Review -- Pros

- Using Icons Library, Which is good Step.
- Buttons are really good, Due to having the micro-interactions & duration effects.
- Navbar is looking good by filling those center buttons.
- Borders, Are looking perfect, Might be you can decrease by 1px.
- Fallback images is a good way of managing the whole image displaying process.
- Validation of Content is quite good - Due to many applications have Characters Limit, But you have kept Words Limit. Nice But It might Affect Some Users.
  But good, Beacuse it can stop spaming posts.
- Folder Strucutre is Quite Pretty Good.
- Good Way of using the Text Validation.
- Commenting of each code was pretty good for reading.
- Post Content Exapnding is Really Good.
- UI is totally Responsive.

## Code Review --- Cons

- Try to build within 2Hr - 2.5Hr Max. Not 6Hrs more than that.

- Leave little gaps between imports, functions and etc. For better reading
- Proper Tailwind which is not configured like for using colors.
- Color Platte Choice is Bad
- Font Selection
- Unwanted Tags are Used Reaptedly

1. index.css
   - Color theme init is not proper way.

2. App.jsx
   - Unwanted Css Using, Eg justify-start, items-center
   - Remove unwanted un-used imports.

3. Nav.jsx
   - Icon & Text - Gap
   - Div's are not in center
   - Logo - for Faster Load - Affects User Experience
     - Width
     - Height
     - Loading State
     - Fetch Priority
     - OnClick the it's not toggling the show post preview. (Very Important)
   - Center Icons
     - Unwanted usage of div's, span and css classes

4. As in the code i saw you have used icon-library for icons. Try using that instead of .SVG, Images. For Better Performance & Better In-Hand-Changes.

5. Maintain Heading's Hirearchy.

6. Create Post
   - Form has validation for all fields, But for image url's it does'nt have validations for URL acceptance.
   - Selection of Role is not matching the height of other nearby fields.
   - Gap is not consistent.

7. Show Post
   - EMPTY POST - Text is too larger instead show a Icon + Small Text - Maybe Align it in the center.
   - Card's Must Have Proper Rounding Border Radius. Even for Inner Elements To not the break the UI Strutcure.

8. But Keeping the Utils Folder is Amazing but not for those Left & Right Image Element.
   - Waste of using Left & Right Image Code.

9. Form Error Must be Displayed Below the Fields, Some are there But Some are on the Right Side.

10. Delete Button - Try to convert that String Value to Boolean

11. Check the Console Error Logs While Creating Post.

12. Remove Strict Mode - To Aviod Duplicay of Logs.
