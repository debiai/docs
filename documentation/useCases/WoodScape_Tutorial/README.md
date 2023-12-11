# Valeo WoodScape - 2D Objects Detection case study

<br> 
<br>

The WoodScape dataset is a public dataset containing more than *100K
images* of urban scenes captured using fish-eye cameras for automotive driving tasks. The images are provided by 4 different cameras with different angles of view (front, rear, middle right and middle left) with 360° coverage and have annotations for a diverse set of computer vision tasks.
<br>
In this case study, we used approximately *72K images* and focused on the 2D bounding boxes detection task with five classes: *vehicle, person, bicycle, traffic light and traffic sign.*
<br>
<br>
This tutorial will be divided into two distinct steps: <br>
1. Exploring the dataset before the training process. <br>
2. Analysing the models results.
<br>
<br>

## Dataset Exploration

In this part of the tutorial, we will focus on the exploration of the WoodScape dataset's objects distribution and all the observations we can draw from it to help us design and execute our learning process accurately.


### Parallel Coordinate 
First, We use the parallel coordinate to get an overview of our dataset: <br>
- Get a summary of the dataset columns overall distribution, this will help us get a grasp of the dataset distribution and spot outliers.
- Select some columns to explore their data by selecting values and trying to spot outliers and biases. 

An interesting feature of DebiAI is the **“color button”**, which will discriminate the data according to the values of a given column, in our case, we choose the *“camera_id”* column which has 4 different values: *MVR, MVL, FV and RV*.

The [Figure 1](#figure-01---the-parallel-coordinates-of-the-woodscape-dataset-before-filtering) displays the parallel coordinate of the WoodScape dataset filtered by the color of the *"camera_id"* values; while the [Figure 2](#figure-02---the-parallel-coordinates-of-the-woodscape-dataset-after-filtering-to-get-the-train-set-and-the-traffic-sign-class-data) shows some filters applied on the same parallel coordinate to select data. 

##### Figure 01 - The Parallel coordinates of the WoodScape dataset before filtering. 
![Parallel Coordinates 01](./images/01_Parallel_Coordinates.png)
##### Figure 02 - The Parallel coordinates of the WoodScape dataset after filtering to get the train set and the traffic sign class data.
![Parallel Coordinates 02](./images/02_Parallel_Coordinates.png)


To further investigates the dataset, we explore the distribution of each one of the train, validation and test sets using the **“Data Distribution”** widget.


### Data Distribution 
The [Figure 3](#figure-03---woodscape-dataset-split-from-left-to-train-train-validation-and-test-by-objects-class-distribution-grouped-by-camera-id) displays the distribution of each of the three sets by the class name grouped by the camera id. A first observation is the spectacular imbalance in the distribution of the five objects classes which is inherently related to the nature and the context of the task; in an urban road scene and in day time, it is normal to have more vehicles compared to traffic lights and traffic signs on the road. But it is important to perceive that we keep the same tendency / bias all over the three sets which is important for the accurate interpretation of the model’s outputs. The proportion of objects is more like homogenous across the four cameras in the three sets. 

##### Figure 03 - WoodScape dataset split (from left to train: train, validation and test) by objects class distribution grouped by Camera ID
![Data Distribution 03](./images/03_Data_Distribution.png)

<br>

## Results Analysis
We used two versions of YOLO-based
architectures, specifically YOLOv5 and YOLOv8. A YOLOv5 and a YOLOv8 models trained on WoodScape's train set and a YOLOv8 model trained on the COCO2017 dataset.

We assess the performances of our models on the WoodScape's test set for each of the three models.


### Night Stars Plot
We use the **night stars plot widget** to display the relationship between the precision and the recall of each model to help us navigate the trade-off between the quality and the quantity of detections: are we favouring / prioritizing the safety or the availability of our detection system.

The [Figure 4](#figure-05-the-relationship-between-the-precision-and-recall-for-each-model-using-the-night-stars-plot-widget) shows that the two models trained on the WoodScape's train set have better performances with one having better precision and the other showcasing better recall.

##### Figure 04: The relationship between the Precision and Recall for each Model using the Night Stars Plot widget
![Night Stars Plot 04](./images/05_Night_Stars_Plot.png)

To further investigate the performances of our models giving the context of the task, we use other widgets to help us go deeper into the analysis.


### Point Plot 
The [Figure 5](#figure-05-the-f1-score-of-each-model-by-the-camera-id-grouped-by-model) displays the f1-score of each model by the camera id; we observe that the Yolov5 have better score on the data from front and the rear cameras (FV & RV) comparing to the two other models while the Yolov8 have the best performances when used on data coming from middle view cameras (MVR & MVL); this can suggest us to use two distinct models depending on the position of the cameras. 

##### Figure 05: The f1-score of each model by the camera id grouped by model
![Point Plot 05](./images/06_Point_Plot_f1-score.png)

Another analysis that may help us selecting the best model is to study the effect of the number of objects in each image on the f1-score, which is shown in the [Figure 6](#figure-06-the-effect-of-the-number-of-objects-in-a-frame-on-the-f1-score). The overall tendency that can be observed in this plot is that the two models trained on the WoodScape's train set tend to less perform when provided with frames containing more than 20 objects.

##### Figure 06: The effect of the number of objects in a frame on the f1-score
![Point Plot 06](./images/07_Point_Plot_f1-score_nb-objects.png)

Another question that arises is if the category of the objects influences the performance of the model. In order to explore this hypothesis, we choose two categories of objects *vehicles* and *persons* to study this possible correlation. <br>
The [Figure 7](#figure-07---correlation-between-the-objects-categories-and-the-f1-score-left-f1-score-by-the-number-of-vehicles-right-f1-score-by-the-number-of-persons) displays the plots of the f1-score by the number of vehicles per image (left) and the number of persons per frame (right); a first observation is that the models' performances degrade as the number of persons increases, in the other hand, the performances improve as the number of vehicles grows in the images, which indicates that our models have a certain bias towards the vehicle category. This can be explained by the fact that our dataset has more objects belonging to this category compared to the four others.

##### Figure 07 - Correlation between the objects' categories and the f1-score; left: f1-score by the number of vehicles, right: f1-score by the number of persons
![Point Plot 07](./images/08_Point_Plot_f1-score_nb-vehicles_vs_f1-score_nb_persons.png)

Giving the last observation, we can conclude that it is important to conduct more training experiments to try to eliminate the bias induced by the task's context using different training techniques for imbalanced datasets.