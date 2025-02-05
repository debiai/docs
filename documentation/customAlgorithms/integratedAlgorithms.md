# DebiAI integrated Algorithms

DebiAI comes with a set of integrated algorithms that you can use right away.
If you want to add your own algorithms, check the [Custom algorithms documentation](./README.md). If you want to check the the code of the integrated algorithms, you can find it [here](https://github.com/debiai/debiai/tree/main/debiaiServer/modules/algoProviders/integratedAlgoProvider/algorithms). If you are interested in a specific algorithm, [let us know](https://github.com/debiai/debiai/issues).

## Classification Metric

Calculates the classification error according to the ground truth and the predictions. Useful to evaluate the performance of a classification model. It basically calculates the number of misclassified samples. Finally, the algorithms returns a list of booleans that indicates True if the sample is misclassified and False otherwise.

## Regression Metric

Calculates the regression error according to the ground truth, the predictions and a ceil value. Useful to evaluate the performance of a regression model. It basically calculates the absolute difference between the ground truth and the predictions. Finally, the algorithms returns a list of booleans that indicates True if the error is above the ceil value.
